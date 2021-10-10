const firstname = localStorage.getItem('firstName');
const lastname = localStorage.getItem('LastName');
const clickId = localStorage.getItem('clickId');
const category  = JSON.parse(localStorage.getItem('Category'));
const animals = JSON.parse(localStorage.getItem('AnimalsDetails'));
const catType = category[clickId].cattype;
$(function() {
    Promise.all([
        LoadHeader(),LoadFooter()
    ]);

    $("#userInput").html(
        `
            Category Choosen By You Is ${catType}
        `
    );
    LoadBodyData();
});


const handelClick = (evt) => {
    location.href = "/"
}


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
    for(let i = 0; i < animals.length; i++) {
        if(animals[i].category === catType){
            $("#animalList").append(
                `
                <li>${animals[i].animal}</li>
                `
            );
        }
    }
};
