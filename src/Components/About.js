// import React, {useState} from 'react'

export const About = () => {
//    document.title = "TextUtils - About";
   try {
    document.getElementById("change-li").classList.remove("active");
   document.getElementById("change-li-about").classList.add("active"); 
   } catch (error) {
        console.error(error)
   }
   
    return (
        <>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem sit nostrum commodi eum officia odio perferendis placeat cupiditate voluptas nihil, earum labore fugit in facere alias. Mollitia, aliquam sint.</p>
        <h2>What is textUtils</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officia similique provident aspernatur iste eius dolorum omnis. Dolorem veniam consequuntur ipsa, porro optio et nesciunt voluptatum rerum, expedita consequatur officiis rem repellat, magni possimus aliquam omnis iste at amet quia. Beatae non laboriosam quidem fuga impedit neque eligendi ad consectetur at, aspernatur natus, ipsum saepe. Quisquam magni ad quos doloremque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto ex itaque quaerat reprehenderit nisi vero consequuntur pariatur numquam, iusto, corrupti alias.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in minus quae incidunt nam sed, est commodi, magni omnis enim velit explicabo? Nisi fugit consequuntur voluptatibus dolores amet illum ea modi, nam cum.</p>
        <h2>Why Should you use it</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam molestias rem amet debitis sed soluta accusantium similique et voluptates neque nam ducimus ea repellat officia rerum labore alias odit blanditiis sunt ullam, asperiores ipsa. Numquam cum minus sit sed corporis sunt voluptates sequi repudiandae quia, ad eveniet, distinctio, voluptatibus quasi iusto laudantium assumenda rem?</p>
        <h2>How to use</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut sed quasi similique laboriosam dicta fugiat quis. Explicabo, repudiandae nulla porro ipsa velit nesciunt asperiores exercitationem autem inventore alias blanditiis consequuntur voluptates.</p>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque est nemo!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci voluptates quis, nihil libero eaque et at accusamus consectetur, iure, corrupti aliquam?</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit repellendus perspiciatis nihil excepturi provident obcaecati expedita, nesciunt, minus eos ducimus quaerat consequatur maxime libero voluptatum dolorum consectetur, doloribus et! Totam magni facere dolorum?</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi totam soluta necessitatibus, quidem vel id quam quisquam sint facilis reprehenderit incidunt et?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque inventore vel.</li>
        </ul>
        </>
    )
}
