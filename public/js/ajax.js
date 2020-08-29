const ajax = (type, url, data) => {
   

    return new Promise((resolve, reject) => {
        //headers: {"Authorization": "Basic xxxx"}
        const token = localStorage.getItem("TOKEN");
        $.ajaxSetup({
            headers:{"Authorization":token}
        })
        $.ajax({
            type: type,
            url: url,
            data: data,
            cache: false,
            crossDomain: true,
            processData: true,
            headers: {"Authorization": token,
                "random-header":"test"
        },
            success: function(data) {
                resolve(data)
            },
            error: function(a, b) {
                console.log(b);
                reject(a)
            }

        })
    });
}