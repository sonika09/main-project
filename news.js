$(document).ready(function () {
  
    // FETCHING DATA FROM JSON FILE
    $.getJSON("https://api.edamam.com/api/nutrition-data?app_id=af0e5e21&app_key=d6d53d01469a7ae93ea41b70913e9840&nutrition-type=cooking&ingr=10%20egg%201kg%20rice", 
            function (data) {
        var student = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' + 
                value.calories+ '</td>';

            student += '<td>' + 
                value.totalWeight + '</td>';

            

            student += '</tr>';
        });
          
        //INSERTING ROWS INTO TABLE 
        $('#table').append(student);
    });
});