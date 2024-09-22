type RootStackParamList = {
    // truyền data 
    // tại trang home truyền đi các đối tượng sau
    home:undefined,
    "review-detail":{id: number; title:string; star:number} | undefined, // undefined is not used
    // Feed: {sort: 'latest' | 'top' } | undefined;
}