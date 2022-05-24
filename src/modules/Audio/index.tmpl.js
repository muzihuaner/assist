const BigTextHtml = (namespace) => {
     return `<audio autoplay id='${namespace}-audio-media'>
               <source src='' id='${namespace}-audio-source'>
               <embed height="0" width="0"  src='' id='${namespace}-audio-embed'>
        </audio>
        `
}

export default BigTextHtml;