import axios, {
    AxiosResponse,
    AxiosError}
    from "../../node_modules/axios/index";
    

    interface IBid{
        Id:number;
        Item:string;
        Price:number;
        Name:string;
    }
    let getAllButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("AllBidsButton")
    getAllButton.addEventListener("click", doGetAll);
    let outputElement :AddEventListenerOptions("click" , doGetAll);
    
    function doGetAll(): void {
        let uri: string = "https://restcoinservice20181029121431.azurewebsites.net/api/Bid";
        axios.get<IBid>(uri)
            .then(function (response: AxiosResponse): void {
                console.log(response.data);
                let result: string = "<ol>";
                response.data.array.forEach((bids: IBid) => {
                    result += "<li>" + bids.Id + bids.Item + bids.Price + ' ' + bids.Name +"</li>";
                });
                result += "</ol>"
                console.log(result);
            })
    
            .catch(function (error: AxiosError): void {
                console.log(error);
            });
    }