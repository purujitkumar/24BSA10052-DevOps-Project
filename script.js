document.querySelectorAll("nav a").forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault();
        const target=document.querySelector(link.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(window.scrollY>=sectionTop){
            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }

    });

});

const eventDate=new Date("September 18, 2026 09:00:00").getTime();

function updateCountdown(){

    const now=new Date().getTime();

    const distance=eventDate-now;

    if(distance<=0){

        const countdown=document.getElementById("countdown");

        if(countdown){

            countdown.innerHTML="<h2>TechNova 2026 Has Started!</h2>";

        }

        return;

    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    const setValue=(id,value)=>{

        const element=document.getElementById(id);

        if(element){

            element.textContent=String(value).padStart(2,"0");

        }

    };

    setValue("days",days);
    setValue("hours",hours);
    setValue("minutes",minutes);
    setValue("seconds",seconds);

}

updateCountdown();

setInterval(updateCountdown,1000);

const form=document.querySelector("form");

if(form){

    form.addEventListener("submit",e=>{

        e.preventDefault();

        alert("Registration submitted successfully! This is a demo website.");

        form.reset();

    });

}

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

console.log("TechNova 2026 website loaded successfully.");