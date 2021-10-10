const dataURL = "../JSONdata/A2-JSON.json"
const categoriesArray = new Array();
const animalsArray = new Array();

$(function() {
    //call to ajax

    $.ajax({
        type: "GET",
        url: dataURL,
        dataType: "json",
        success: function (response) {
            // responseData = response;
            Promise.all([
                setPersonalData(response),setCategories(response),setAnimals(response)
            ]).then(()=>{
                LoadHeader();
                LoadFooter();
            });
        }
    }); //end load
    LoadBodyData();

});

const setPersonalData = (data)=>{
    const { A2Personal } = data; // destructuring data from json
    localStorage.setItem("FirstName",A2Personal.FirstName);
    localStorage.setItem("LastName",A2Personal.LastName);
    localStorage.setItem("StudentID",A2Personal.StudentID);
    localStorage.setItem("UserName",A2Personal.UserName);
    localStorage.setItem("Program",A2Personal.Program);
    localStorage.setItem("HomeCountry",A2Personal.HomeCountry);
};

const setCategories = (data) => {
    const { Categories } =  data;
    for(let i=0; i<Categories.length; i++) {
        categoriesArray.push(new Category(Categories[i].cattype,Categories[i].logo));
    }
    localStorage.setItem("Category",JSON.stringify(categoriesArray));
};

const setAnimals = (data) => {
    const { AnimalDetails } =  data;
    for(let i=0; i<AnimalDetails.length; i++) {
        animalsArray.push(new AnimalDetail(AnimalDetails[i].animal,AnimalDetails[i].category,AnimalDetails[i].scientific,AnimalDetails[i].colors,AnimalDetails[i].photoDepiction));
    }
    localStorage.setItem("AnimalsDetails",JSON.stringify(animalsArray));
};


class Category{
    constructor(cattype,logo){
        this.cattype = cattype;
        this.logo = logo;
    }
};

class AnimalDetail{
    constructor(animal, category,scientific,colors, photoDepiction){
        this.animal = animal;
        this.category = category;
        this.scientific =scientific;
        this.colors = colors;
        this.photoDepiction = photoDepiction;
    }
};

const  LoadHeader = () => {
    $("#main").html(
        `
            <h3>Assignment-2</h3>
            <h3>Name: ${localStorage.getItem('FirstName')} ${localStorage.getItem('LastName')} </h3>
            <h3>StudentID: ${localStorage.getItem('StudentID')}</h3>
            <h3>Program: ${localStorage.getItem('Program')}</h3>
            <h3>StudentID: ${localStorage.getItem('UserName')}</h3>
        `
    );
    $("#main").addClass("textCenter");
}

const  LoadFooter = () => {
    $("#footer").html(
        `
            <hr>
            <h5>My Sheridan Program: ${localStorage.getItem('Program')} </h5>
            <h5>StudentID: ${localStorage.getItem('StudentID')}</h5>
            <h5>Program: ${localStorage.getItem('Program')}</h5>
            <h5>My Home Country: ${localStorage.getItem('HomeCountry')}</h5>
        `
    );
    $("#footer").addClass("textCenter");
}


const LoadBodyData = ()=>{
    const data = JSON.parse(localStorage.getItem('Category'));
    console.log(data);
    for (let i=0; i<data.length; i++) {
        $("#catList").append(
            `
                <li id=${i}>
                    ${data[i].cattype}
                </li>
            `
        );
    }
};