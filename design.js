const observer = new IntersectionObserver(
    (entries,observer ) =>{
        entries.forEach( (entry)=>{
            if(entry){
                if( entry.isIntersecting){
                    entry.target.classList.add('slide-out')
                    observer.unobserve(entry.target)
                }
                
            }
        }
        )
    }
)


document.addEventListener('DOMContentLoaded', ()=>{
    const elements = document.querySelectorAll('.slide-in')
    
        elements.forEach((element) =>{
            observer.observe(element);
        }
        )
    
})