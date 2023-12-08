function shortenNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000)?.toFixed(1) + "M";
    } else if (num >= 1000) {
        return (num / 1000)?.toFixed(1) + "k";
    } else {
        return num?.toString();
    }
}

function formatCurrency (number: number) {
    return new Intl.NumberFormat('ja-JP', { 
      style: 'currency', 
      currency: 'JPY', 
      currencyDisplay: "code" 
    })
    .format(number)
    .replace('JPY', "")
    .trim();
  }


function maskNumber (number: number){
const pattern = /\d/g;
const result = number.toFixed(2).toString().replace(pattern, 'x');

return result // "xxx-xxx-xxxx"
}

export { shortenNumber, formatCurrency, maskNumber }