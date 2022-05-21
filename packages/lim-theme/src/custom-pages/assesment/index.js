import React, { useEffect } from "react";
import { connect } from "frontity";

const Assesment = ({ state }) => {
  // const data = state.source.get(state.router.link)
  const fetchData = {
    action: "get_questions_answers",
  };

  // API is blocked by CORS for now but it should be working fine, the base url should be exported
  // into a util functions that contains the ENV variable and base path
  useEffect(() => {
    fetch("https://staging.lookinmena.com/wp-admin/admin-ajax.php", {
      method: "POST",
      body: JSON.stringify(fetchData), // The data
      headers: {
        "Content-type": "", // The type of data you're sending
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {}
      );
  }, []);

  return <div>Assesment is working</div>;
};

export default connect(Assesment);
