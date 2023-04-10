import React from "react";
import Badge from './Badge';

const badgeUrls= ['https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white','https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', 
'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white', 'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white', 
'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white','https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white', 
'https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white', 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white', 
'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white', 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', 
'https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white', '	https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white',
'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
]

const Skills= ()=>{
    return( 
        <section> 
            <h2 className="skillsHeader">Skills</h2>
            <section id="skillsB">   
                {badgeUrls.map((url, index)=> <Badge key={index} bUrl={url} />)}
            </section>
        </section>   
    );
}

export default Skills