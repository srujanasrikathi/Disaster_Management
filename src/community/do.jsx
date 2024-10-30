import React from 'react';
import './do.css';
function Min() {
  return (
    <div className="guide">
      <header className="do">
        <h1>Disaster Communication Guidelines</h1>
        
        <div className='dos'>Dos</div>
        <ul>
          <li><span className="highlight">Be Clear and Concise:</span> Use straightforward language that is easily understood. Avoid jargon.</li>
          <li><span className="highlight">Use Visuals:</span> Incorporate maps, images, or infographics to convey information quickly.</li>
          <li><span className="highlight">Provide Updates:</span> Regularly update your audience as new information becomes available.</li>
          <li><span className="highlight">Include Actionable Steps:</span> Clearly state what people should do, such as evacuation routes or safety measures.</li>
          <li><span className="highlight">Tag Relevant Authorities:</span> Include official sources like local emergency services or government agencies for credibility.</li>
          <li><span className="highlight">Encourage Sharing:</span> Ask followers to share the information to reach a wider audience.</li>
          <li><span className="highlight">Stay Professional:</span> Maintain a respectful and serious tone, given the nature of the content.</li>
          <li><span className="highlight">Monitor Responses:</span> Engage with your audience by answering questions and addressing concerns.</li>
        </ul>

        <div className='donts'>Donts</div>
        <ul>
          <li><span className="highlight">Avoid Panic-Inducing Language:</span> Stay calm and avoid sensationalism that could cause unnecessary fear.</li>
          <li><span className="highlight">Don’t Spread Unverified Information:</span> Always confirm facts before sharing to prevent misinformation.</li>
          <li><span className="highlight">Avoid Overloading with Information:</span> Too much detail can be overwhelming; focus on key messages.</li>
          <li><span className="highlight">Don't Neglect Accessibility:</span> Ensure your content is accessible to everyone, including those with disabilities.</li>
          <li><span className="highlight">Refrain from Using Humor:</span> Jokes or lighthearted comments are inappropriate during disasters.</li>
          <li><span className="highlight">Don't Ignore Feedback:</span> Failing to respond to concerns or questions can lead to confusion and distrust.</li>
          <li><span className="highlight">Avoid Non-Emergency Content:</span> Stay focused on the disaster and avoid unrelated posts during critical times.</li>
          <li><span className="highlight">Don’t Forget to Include Resources:</span> Provide links to emergency resources, hotlines, and shelters.</li>
        </ul>
      </header>
    </div>
  );
}
export default Min;

