import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="py-5 text-center bg-gray-800">
      <a href="https://github.com/pankod" target="_blank" className="block mb-3" rel="noreferrer"></a>

      <ul className="flex justify-center p-0 m-0 list-none">
        <li className="mx-3">{/* <GithubIcon data-test="icon" color="white" width="28" height="29" /> */}</li>
        <li className="mx-3">{/* <TwitterIcon data-test="icon" color="white" width="28" height="28" /> */}</li>
        <li className="mx-3">{/* <YoutubeIcon data-test="icon" color="white" width="28" height="29" /> */}</li>
        <li className="mx-3">{/* <LinkedinIcon data-test="icon" color="white" width="28" height="32" /> */}</li>
      </ul>
    </div>
  );
};
