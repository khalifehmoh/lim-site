import React, { useEffect } from "react";
import { connect } from "frontity";
import useHttp from "../../hooks/use-http";

const Assesment = ({ state }) => {
  const { sendHttp: getAssesmentData, isLoading, error } = useHttp();
  // const data = state.source.get(state.router.link)
  const fetchData = {
    action: "get_questions_answers",
  };

  const assesmentCallback = (data) => {};

  // API is blocked by CORS for now but it should be working fine
  useEffect(() => {
    getAssesmentData(
      {
        url: "wp-admin/admin-ajax.php",
        body: JSON.stringify(fetchData),
      },
      assesmentCallback
    );
  }, []);

  return (
    <section>
      {isLoading && <p>Assesment is loading</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && <p>Done</p>}
    </section>
  );
};

export default connect(Assesment);
