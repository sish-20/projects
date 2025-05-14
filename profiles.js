    document.addEventListener('DOMContentLoaded',() =>{

        const existingProfiles = localStorage.getItem('profile-names');
        let profileNames = existingProfiles ? JSON.parse(existingProfiles) : [];
        console.log(profileNames);
        
        let profileList = document.querySelector('.profile-list');

        // console.log(profileList.innerHTML);
        
        profileNames.forEach( (name) => {
            
            let itemElem = document.createElement("div");
            // itemElem.classList.add('bg-slate-100 rounded p-2  hover:bg-slate-200 ')
            itemElem.innerHTML = 
                    ` <input type='submit' value='${name}' class="item-btn bg-sky-400 rounded p-3 text-slate-200 my-2 py-4 min-w-40 cursor-pointer hover:text-white hover:scale-110 hover:bg-sky-500"> 
                    
                    </input>`

            profileList.appendChild(itemElem);

        });

        // Optional: Provide success feedback
        if(profileNames === []){
            
            profileList.innerHTML = 'No profiles exist'
        }

        const itemBtns = document.querySelectorAll('.item-btn')

        itemBtns.forEach( (btn,index) =>
                btn.addEventListener('click', () =>{
                    const itemName = btn.value;
                    console.log(itemName);
                    localStorage.setItem('current-profile',`${itemName}`)
                    window.open('./user.html', '_self')
            })
        )
        
        
})           

