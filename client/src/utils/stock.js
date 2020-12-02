import { iex } from "./iex.js";

export const stock = {

    latestPrice: (ticker, callback) => {
        fetch(stock.latestPriceURL(ticker))
            .then((response) => response.json())
            .then((data) => callback(stock.formatPriceData(data)))
            },

    latestPriceURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
                const formattedData = {}
<<<<<<< HEAD
                formattedData.close = stockData.close
                formattedData.open = stockData.open
                formattedData.volume = stockData.volume
=======
                formattedData.price = stockData.close
                formattedData.date = stockData.date
                formattedData.time = stockData.label
>>>>>>> bc509604a42c19c81c2e329987632fc9e637b959
                return formattedData
    }

}