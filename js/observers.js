// observers to observe an object in html
// https://www.youtube.com/watch?v=huVJW23JHKQ



// expanders
const expanders = document.querySelectorAll(".expand")

const expandOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};

const expandOnScroll = new IntersectionObserver(function(entires, expandOnScroll){
  entires.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    }
    else{
      entry.target.classList.add("expanded")
      expandOnScroll.unobserve(entry.target);
    }
  });
}, expandOptions )

expanders.forEach(expander =>{
  expandOnScroll.observe(expander);
});


// faders

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -350px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});