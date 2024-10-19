/**
 * Write this script!
 *
 * 1. select the relevant elements from the DOM (.getElementById() or .querySelector())
 * 2. handle the "click" event of the send button (.addEventListener())
 *
 * 3. when clicked,
 *    a) get the typed text (.value)
 *    b) check if a name and message is typed
 *    c) if so, send a POST request to the discord webhoook (fetch(...))
 *    d) clear the message box on success! (set .value)
 *
 * bonus: can you customize the profile picture, or some other fields?
 */

// NOTE: in real life, you do not want to share your webhook URL publicly (i.e. in frontend code)
//       as they can abuse it! this is just for an example.
const webhookUrl = "https://discord.com/api/webhooks/1212962325863206952/5BBCTj5VDImKLG6sj2wwTIQGA70JCMdqgTLpd1wGyIbyIQj4AZkCv0OsiA2447pszVS9"
const name_val = document.getElementById("name-input")
const send_button = document.getElementById("send-button")
const message = document.getElementById("message-input")

send_button.addEventListener("click", func1)

async function func1() {
    if (name_val.value != "" && message.value != "") {
        try {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: name_val.value,
                    content: message.value
                })
                })
        } catch (err) {
            alert("Cant send Message")

        }
    }
}



 

// ADD CODE HERE

