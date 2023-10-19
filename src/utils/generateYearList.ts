export const generateYearList = (): { label: string; value: number }[] => {
    const currentYear = new Date().getFullYear();
    const startYear = 1865;
    const yearsList: { label: string; value: number }[] = [];

    for (let year = startYear; year <= currentYear; year++) {
        yearsList.push({ label: year.toString(), value: year });
    }

    return yearsList.reverse();
}