
const token = 'Tpk_3a7835c6220d47cb90d306aa974df234'; 


export const ibm = company => {
    return $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/IBM/quote?token=${token}` 
    }).then(response => console.log(response))
}