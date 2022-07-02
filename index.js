


$("#add_user").submit(function(event){
    alert("Student added Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:5500/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:5500/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Are you sure you want to delete this Student?")){
            $.ajax(request).done(function(response){
                alert("Deleted Successfully!");
                location.reload();
            })
        }

    })
}