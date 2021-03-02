import 'bootswatch/dist/lux/bootstrap.min.css';
import Head from 'next/head';
import Header from '../components/Header'
import { profile } from '../styles/common.module.css'
const TechnicalSkills = () => {
    return (
        <div>
            <Head>
                <title>Amal Edward Portfolio</title>
                <link rel="icon" href="https://th.bing.com/th/id/OIP.1YZC-Gy4hj95QL036kXOAQHaFx?pid=ImgDet&rs=1" />
            </Head>
            <Header/>
            <div className="container">
        <br></br>
        <table class="table table-hover">
            <tbody>
                <tr class="table-active">
                    <th scope="row">React.js</th>
                    <td>Deep Knowledge about React Components, Lifecycle, Routes and Hooks (Can do TypeScript)</td>
                   
                </tr>
                <tr>
                    <th scope="row">HTML5, CSS3 and Vanilla JS </th>
                    <td>Knowledge in Creating a responsive web application using these technologies.</td>
                   
                </tr>
                <tr class="table-active">
                    <th scope="row">Node.js </th>
                    <td>Creating the backend server to deal with queries and RESTful operations using npm packages</td>

                        </tr>

                <tr>
                    <th scope="row">C, Python and Javascript</th>
                    <td>Deep programming knowledge with these languages and comfortable with object oriented data structure</td>

                </tr> <tr class="table-active">
                    <th scope="row">Database Management - MySQL and MOngoDB</th>
                    <td>Experience in handling queries and CRUD services on MySQL and MongoDB </td>

                        </tr>
                        <tr>
                            <th scope="row">CSS Frameworks - BOOTSTRAP,SAss,ReactSTrap</th>
                            <td>Great practical knowledge in styling frameworks and SASS</td>

                        </tr>
                        <tr class="table-active">
                            <th scope="row">State Management using Redux</th>
                            <td>Can do state managment using redux on react applications</td>
                        </tr>
                 <tr>
                    <th scope="row">Server Side Rendering and static site generation- Next.js</th>
                    <td>Great practical knowledge in Next.js, can do Server Side Rendering</td>

                </tr>
                <tr class="table-active">
                    <th scope="row">State Management using Redux</th>
                    <td>Can do state managment using redux on react applications</td>
                 </tr>
                <tr>
                    <th scope="row">Version Control - Git</th>
                    <td>Can push, pull and do other activities using git</td>

                </tr>
              <tr class="table-active">
                <th scope="row">User Authentication - bcryptjs, hapi/joi and JWT</th>
                <td>Dealing with authetication and other security related operations using npm packages and JSON Web Token</td>

            </tr>
            <tr>
                <th scope="row">Content management system - Sanity.io </th>
                <td>Can handle Sanity.io, an open-source headless CMS</td>

            </tr>
           <tr class="table-active">
            <th scope="row">State Management using Redux</th>
            <td>Can do state managment using redux on react applications</td>

        </tr>
        <tr>
            <th scope="row">Django Framework</th>
            <td>Doing operations like Database Management, User registration/login and Profile management using Django</td>
        </tr>         
            </tbody>
        </table>
            </div>
            </div>)
}
export default TechnicalSkills 
