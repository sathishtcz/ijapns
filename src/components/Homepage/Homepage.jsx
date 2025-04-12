import React from 'react'
import Home from '../../shared/components/Home/Home'

export default function Homepage() {

    const keywords = [
    "Clinical Psychology", "Cognitive Psychology", "Behavioral Neuroscience",
"Affective Neuroscience", "Developmental Psychology", "Neuropsychology",
"Educational Psychology", "Health Psychology", "Occupational Psychology",
"Social Neuroscience", "Neuroplasticity Studies", "Mental Health Interventions",
"Brain Imaging Techniques", "Addiction and Recovery", "Emotional Regulation",
"Trauma and Resilience", "Psychological Assessment", "Cross-Cultural Psychology",
"Psychoneuroimmunology", "Neuropharmacology Research", "Parenting and Child Behavior",
"Stress and Coping", "Mindfulness Practices", "Neurodegenerative Disorders",
"Personality Psychology", "Cognitive Rehabilitation", "Sleep and Neuroscience",
"Learning and Memory", "Psychosomatic Medicine", "Positive Psychology",
"Consciousness Studies", "Brain-Computer Interfaces", "Emotion and Cognition",
"Behavioral Genetics", "Attention and Perception", "Therapeutic Interventions",
"Neuroscience of Learning", "Motivation and Behavior", "Neural Mechanisms",
"Neuroethics", "Aging and Cognition", "Language Processing",
"Executive Functioning", "Child and Adolescent Neuroscience", "Group Dynamics and Behavior"
    ];

    // Split the keywords into three arrays of 15 each
    const firstRow = keywords.slice(0, 10);
    const secondRow = keywords.slice(10, 20);
    const thirdRow = keywords.slice(20, 30);


    return (
        <div>
            <Home keywords={keywords} firstRow={firstRow} secondRow={secondRow} thirdRow={thirdRow} />
        </div>
    )
}
