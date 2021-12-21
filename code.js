
//A Javascript Program to illustrate Caesar Cipher Technique
	
	// Encrypts text using a shift od s
	function encrypt(text, s)
	{
		let result=""
		for (let i = 0; i < text.length; i++)
		{
			let char = text[i];
			if (char.toUpperCase(text[i]))
			{
				let ch = String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
				result += ch;
			}
			else
			{
				let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
				result += ch;
			}
		}
		return result;
	}

    const decrypt = (text, rot = 3) => {
        if (rot > MAX_ROT || rot < 0) {
            throw Error('rot can be only between 0 to 26')
        }

        text = Array.from(text)

    const decryptedText = text.map((char) => {
        const isLower = char.toLowerCase()
        const idx = text.indexOf(char.toUpperCase())
    
        if (idx === -1) {
            return char
        }
    
        let decryptedIdx = (idx - rot) % MAX_ROT
    
        decryptedIdx = decryptedIdx < 0 ? decryptedIdx + MAX_ROT : decryptedIdx
    
        const decryptedChar = text[decryptedIdx]
    
        return isLower ? decryptedChar.toLowerCase() : decryptedChar
    })
    
        return decryptedText.join('')
    }
	
	// Driver code
	let text = "ATTACKATONCE";
    let MAX_ROT = text.length
	let s = 4;
	document.write("Text : " + text + "<br>");
	document.write("Shift : " + s + "<br>");
	document.write("Cipher: " + encrypt(text, s) + "<br>");
	document.write("Decipher: " + decrypt(text, s) + "<br>");

