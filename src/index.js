/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
3 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById("box")
const text = document.getElementById("text")

box.addEventListener("focus", function(){
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function(){
    text.textContent = "Click here to give your rating"
    hideEmotions()
})


// Write your code here 👇
// - I did it 😎 <villem.alango(at)gmail.com>

const EMOJIS = ['🤬', '☹️', '😐', '🙂', '😁']
const emojis = []

//  Create a row of smileys to be animated.
const row = document.createElement("div")

for (let i = 0; i < 5; ++i) {
    const el = document.createElement("div")
    row.appendChild(el)
    el.textContent = EMOJIS[i]
    el.classList.add('disappear')
}
row.classList.add('hidden')
box.appendChild(row)
row.id = "emo-row"

//  And be ready for Muppet-show...
box.addEventListener("keypress", ev => {
    if (ev.key > 5 || ev.key < 1) return        //  No way...
    
    row.classList.remove("hidden")
    const index = 1 * ev.key - 1
    
    toggle(index, false)
})

function toggle(index, hide) {
   const el = row.children[index]
    
    if (hide || el.classList.contains('appear')) {
        el.classList.add("disappear")
        el.classList.remove("appear")
    } else {
        el.classList.remove("disappear")
        el.classList.add("appear")
    } 
}

function hideEmotions() {
    for(let i = 0; i<5; ++i) {
        toggle(i, true)
    }
}

/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis? 
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/
