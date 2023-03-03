import PageContent from "../components/PageContent/PageContent";
import NewsletterSignup from "../components/Newsletter/NewsletterSignup";
import { ActionFunction } from "react-router-dom";

export const newsletterAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  //do anything we want...
  console.log(data.get("email"));
  return { message: "Signup successful!" };
};

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;
