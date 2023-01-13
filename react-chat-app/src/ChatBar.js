    import React from 'react'
    import './ChatBar.css'

    export default function ChatBar() {

        const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

        // const emojis = [
        //   "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺", "😊",
        //   "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚"
        // ];
      
        function sendMessage() {
            //  message retrive
            const message = document.getElementById("message").value;
            const randomUsername = user_list[Math.floor(Math.random() * user_list.length)]
            // display the message in p tag
            const messageElement = document.createElement("p");
            messageElement.innerHTML = `${randomUsername}: ${message}`;
            
            const likeButton = document.createElement("button")
            likeButton.innerHTML = '❤️'
            likeButton.style.marginLeft = "5px"
            let count = 0;
            likeButton.addEventListener('click',function(){
                count++;
                likeButton.innerHTML = '❤️('+count+')';
            });
            messageElement.appendChild(likeButton)
            // Append the message
            document.getElementById("chat-messages").appendChild(messageElement);
            // Clear the input
            document.getElementById("message").value = "";  
        }

        // const emojiPickerBtn = document.querySelector('emoji-picker-btn');
        // const messageInput = document.querySelector('message');

        // emojiPickerBtn.addEventListener('click', () => {
        
        // });

        // function renderEmojiPicker() {
        //   // render the emojis in the modal or overlay
        //   // when clicked, insert the selected emoji into the message input
        //   emojis.forEach(emoji => {
        //     const emojiEl = document.createElement('span');
        //     emojiEl.innerHTML = emoji;
        //     emojiEl.addEventListener('click', () => {
        //       messageInput.value += emoji;
        //     });
        //     // add the emoji element to the modal or overlay
        //   });
        // }
      return (
        <div id='chat-app'>
      <div id='chat-messages'></div>
    <input type="text" id='message' placeholder="Enter your message"/>
    <button type="button" id="emoji-picker-btn">🙂</button>
    <button id="send" onClick={sendMessage}>Send</button>
    </div>
    )
    }
