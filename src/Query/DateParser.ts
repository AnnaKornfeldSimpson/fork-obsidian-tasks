import * as chrono from 'chrono-node';
import type { moment } from 'obsidian';

export class DateParser {
    public static parseDate(
        input: string,
        forwardDate: boolean = false,
    ): typeof moment.fn {
        // Using start of day to correctly match on comparison with other dates (like equality).
        return window
            .moment(
                chrono.parseDate(input, undefined, {
                    forwardDate: forwardDate,
                }),
            )
            .startOf('day');
    }
}
