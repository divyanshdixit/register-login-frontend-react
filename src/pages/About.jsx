import React, { useEffect } from 'react'

const About = () => {

  const getPdf = async () => {
    const pdfs = await fetch('/pdf');
    const resp = await pdfs.json();
    console.log(pdfs, resp);
  }

  useEffect(() => {
    getPdf();
  }, []);

  return (
    <div>About</div>
  )
}

export default About