async function fetchInstagramData() {
    try {
        const accessToken = 'IGQWRPOW9hZAlRvcFlEbzVMNEZAOYWt1OG1KZAmF1WE9id2VyZA3M4ZA3dmUFctUHNSRjg0WUdyc2JWZAy1JVFF5ZAVdtTjNsZAzk0U0U3REEyZA2toRnNrZA0E3ZA0RJSnAtTVVuTG85ZAng4MDE5NXlLWUw3aTYtdHBEUUVNN28ZD';
        const userId = '24357971953816202';
        const apiUrl = `https://graph.instagram.com/v12.0/${userId}/media?fields=permalink&access_token=${accessToken}`;
        const numberOfPosts = 6;
        const widthPercentage = 25;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.data) {
            console.log(data.data);
            const post = document.getElementById('post')
            data.data.slice(0, numberOfPosts).forEach(item => {
                const permalink = item.permalink + '?utm_source=ig_embed&utm_campaign=loading';

                const blockquoteElement = document.createElement("blockquote");
                blockquoteElement.className = "instagram-media";
                blockquoteElement.setAttribute("data-instgrm-captioned", "");
                blockquoteElement.style.width = `${widthPercentage}%`;
                blockquoteElement.setAttribute("data-instgrm-permalink", permalink);

                post.appendChild(blockquoteElement);
            });

            const script = document.createElement('script');
            script.src = "//www.instagram.com/embed.js";
            post.appendChild(script);
        }
    } catch (error) {
        console.error('Error al obtener datos de Instagram:', error);
    }
}

fetchInstagramData();