
# Design Decision:  

1- Component-Based Setup: The website is built by breaking it into smaller sections called components, like people, vehicles, species, etc. This helps in reusing code and keeping things organized.

2- Adaptable Design with Material-UI: The site is designed to work well on all devices—phones, tablets, computers—using Material-UI. This makes sure everyone gets a smooth experience no matter what device they're using.

3- Styling Choices: Styling is done using Bootstrap for the cards and CSS modules for other elements, including media queries for responsive design. This mix helps make things look good and work well on different screen sizes.

4- Efficient Data Handling: Each section gets its data using a smart technique called the useEffect hook. This means data is fetched only when needed, reducing unnecessary calls to the server and making things run faster.

5- Organized Data Components: Every category has its own special component that deals with getting and showing its data. This makes the code neat and easy to manage because each section does its own thing.

# Getting Started
To get started with this project, follow these steps:

* Clone the project to your local machine.
* Open the project in your preferred IDE or text editor.
* Run intall i to install the required dependencies.

<hr/>

<table style="border: 1px solid black;">
            <tr>
                <td  style="border: 1px solid black ;">
                    <img src="./public/img_1.png"   width="400">
                </td>
                <td  style="border: 1px solid black ;">
                    <img src="./public/img_2.png"   width="400">
                </td>
            </tr>
            <tr>
                <td  style="border: 1px solid black ;">
                    <img src="./public/img_3.png"   width="400">
                </td>   
                <td  style="border: 1px solid black ;">
                    <img src="./public/img_4.png"   width="400">
                </td>
            </tr>
            <tr>
                     <td  style="border: 1px solid black ;">
                    <img src="./public/img_5.png"   width="400">
                </td>   
            </tr>
        </table>
