const IDR_TO_USD_RATE = 1 / 15500;

export const formatCurrency = (amount: number, currency: "IDR" | "USD"): string => {
    let formattedAmount: string;

    if (currency === "IDR") {
        formattedAmount = amount.toFixed(2).replace(/\d(?=(\d{3})+(?!\d))/g, "$&.");
        return `Rp ${formattedAmount.replace(".00", ",00")}`;
    }

    if (currency === "USD") {
        const convertedAmount = amount * IDR_TO_USD_RATE;
        formattedAmount = convertedAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return `$ ${formattedAmount}`;
    }

    return amount.toString();
};
