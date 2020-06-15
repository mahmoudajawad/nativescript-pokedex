export function debugLog(...msg: Array<any>): void {
    console.log(...msg);
}

export function camelCaseToSpaced(camelCase: string): string {
    return camelCase.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

export function commaSeparatedToSpaced(commaSeparated: string): string {
    return commaSeparated.replace(/-/g, ' ').toLowerCase();
}