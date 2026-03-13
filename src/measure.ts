export interface Dimension<
    TName extends string = string,
    TBaseUnit extends string = string,
>
{
    readonly name: TName;
    readonly baseUnit: TBaseUnit;
}

type UnitValueToBaseValue = (unitValue: number) => number;
type BaseValueToUnitValue = (baseValue: number) => number;

export interface Measure<T extends Dimension = Dimension>
{
    (units: number): Measure<T>;

    readonly quantity: T;
    readonly valueInBaseUnits: number;

    readonly unitValueToBaseValue: UnitValueToBaseValue;
    readonly baseValueToUnitValue: BaseValueToUnitValue;

    to(unit: Measure<T>): number;
}

export namespace Measure
{
    export function custom<const T extends Dimension>(
        quantity: T,
        unitValueToBaseValue: UnitValueToBaseValue,
        baseValueToUnitValue: BaseValueToUnitValue,
    ): Measure<NoInfer<T>>
    {
        return Object.freeze(Object.assign(
            function(units: number): Measure<T>
            {
                return custom<T>(
                    quantity,
                    (unitValue) => unitValueToBaseValue(units * unitValue),
                    (baseValue) => baseValueToUnitValue(baseValue) / units,
                );
            },
            {
                quantity,
                valueInBaseUnits: unitValueToBaseValue(1),

                unitValueToBaseValue,
                baseValueToUnitValue,

                to(unit: Measure<T>): number
                {
                    return unit.baseValueToUnitValue(this.valueInBaseUnits);
                },
            },
        ));
    }

    export function base<const T extends Dimension>(quantity: T): Measure<NoInfer<T>>
    {
        return custom<T>(
            quantity,
            (unitValue: number): number => unitValue,
            (baseValue: number): number => baseValue,
        );
    }

    export function derived<const T extends Dimension>(
        quantity: T,
        coefficient: number,
    ): Measure<NoInfer<T>>
    {
        return custom<T>(
            quantity,
            (unitValue: number): number => coefficient * unitValue,
            (baseValue: number): number => baseValue / coefficient,
        );
    }
}
