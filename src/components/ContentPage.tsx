// ContentPage.tsx
import PageLayout from "./PageLayout";
import SessionStorageForm from "./SessionStorageForm";

const ContentPage: React.FC= () => {
  return (
    <PageLayout>
        <SessionStorageForm />
    </PageLayout>
  );
}

export default ContentPage;