const dataURL = "../JSONdata/A2-JSON.json"
const categoriesyArray = [];
const animalsArray = [];
let responseData = null;

$(function() {

    $.ajax({
        type: "GET",
        url: dataURL,
        dataType: "json",
        success: function (response) {
            // responseData = response;
            setPersonalData(response);
            setCategories(response);
            setAnimals(response);
        }
    });
});

const setPersonalData = (data)=>{
    const { A2Personal } = data; // destructuring data from json
    localStorage.setItem("Firstname",A2Personal.FirstName);
    localStorage.setItem("LastName",A2Personal.LastName);
    localStorage.setItem("StudentId",A2Personal.StudentID);
    localStorage.setItem("UserName",A2Personal.UserName);
    localStorage.setItem("Program",A2Personal.Program);
    localStorage.setItem("HomeCountry",A2Personal.HomeCountry);
};

const setCategories = (data) => {
    const { Categories } =  data;
    for(let i=0; i<Categories.length; i++) {
        categoriesyArray.push(new Category(Categories[i].cattype,Categories[i].logo));
    }
    localStorage.setItem("Category",JSON.stringify(categoriesyArray));
};

const setAnimals = (data) => {
    const { AnimalDetails } =  data;
    for(let i=0; i<AnimalDetails.length; i++) {
        animalsArray.push(new AnimalDetail(AnimalDetails[i].animal,AnimalDetails[i].category,AnimalDetails[i].scientific,AnimalDetails[i].colors,AnimalDetails[i].photoDepiction));
    }
    localStorage.setItem("AnimalsDetails",JSON.stringify(animalsArray));
};


class Category{
    constructor(catType,logo){
        this.catType = catType;
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