import type { Quantity } from "./quantity.ts";

export interface Measure<T extends string = string>
{
    (units: number): Measure<T>;

    readonly value: number;
    readonly quantity: Quantity<T>;

    unitToBase(unitValue: number): number;
    baseToUnit(baseValue: number): number;

    to(unit: Measure<T>): number;
}

export namespace Measure
{
    export function custom<const T extends string>(
        quantity: Quantity<T>,
        unitToBase: (unitValue: number) => number,
        baseToUnit: (baseValue: number) => number,
    ): Measure<NoInfer<T>>
    {
        return Object.freeze(Object.assign(
            function(units: number): Measure<T>
            {
                return custom<T>(
                    quantity,
                    (unitValue) => unitToBase(units * unitValue),
                    (baseValue) => baseToUnit(baseValue) / units,
                );
            },
            {
                value: unitToBase(1),
                quantity,

                unitToBase,
                baseToUnit,

                to(unit: Measure<T>): number
                {
                    return unit.baseToUnit(this.value);
                },
            },
        ));
    }

    export function base<const T extends string>(quantity: Quantity<T>): Measure<NoInfer<T>>
    {
        return custom<T>(
            quantity,
            (unitValue: number): number => unitValue,
            (baseValue: number): number => baseValue,
        );
    }

    export function derived<const T extends string>(
        quantity: Quantity<T>,
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
