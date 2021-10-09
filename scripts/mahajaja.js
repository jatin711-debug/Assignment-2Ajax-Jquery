const dataURL = "../JSONdata/A2-JSON.json"
const categoriesyArray = [];

$(function() {
    $.ajax({
        type: "GET",
        url: dataURL,
        dataType: "json",
        success: function (response) {
            useLocalStorage(response);
        }
    });
});


const useLocalStorage = (data)=>{
    const { A2Personal } = data; // destructuring data from json
    localStorage.setItem("Firstname",A2Personal.FirstName);
    localStorage.setItem("LastName",A2Personal.LastName);
    localStorage.setItem("StudentId",A2Personal.StudentID);
    localStorage.setItem("UserName",A2Personal.UserName);
    localStorage.setItem("Program",A2Personal.Program);
    localStorage.setItem("HomeCountry",A2Personal.HomeCountry);
};


class Categories{
    constructor(catType,logo){
        this.CatType = CatType;
        this.logo = logo;
    }
}