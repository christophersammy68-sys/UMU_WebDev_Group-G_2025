 // reading more
        document.querySelectorAll(".read-more-btn").forEach(btn=>{
            btn.addEventListener("click", ()=>{
                const member = btn.closest(".team-member");
                const shortBio = member.querySelector(".bio-short");
                const fullBio = member.querySelector(".bio-full");
                if(fullBio.style.display === "block") {
                    fullBio.style.display = "none";
                    shortBio.style.display = "block";
                    btn.textContent = "Read More";
                } else {
                    fullBio.style.display = "block";
                    shortBio.style.display = "none";
                    btn.textContent = "Read Less";
                }
            });
        });

        // scroll to top button
        const scrollBtn = document.getElementById("scrollTopBtn");
        window.addEventListener("scroll", () => {
            scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
        });
        scrollBtn.addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));

        // reveal when scrolling
        const revealEls = document.querySelectorAll(".reveal");
        function revealOnScroll() {
            const trigger = window.innerHeight * 0.85;
            revealEls.forEach(el => {
                if(el.getBoundingClientRect().top < trigger) {
                    el.classList.add("active");
                }
            });
        }
        window.addEventListener("scroll", revealOnScroll);
        window.addEventListener("DOMContentLoaded", revealOnScroll);
