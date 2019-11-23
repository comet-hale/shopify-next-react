import {
    Layout,
    Page,
    EmptyState,
} from '@shopify/polaris';

const imgURL = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
    <Page>
        <Layout>
            <EmptyState
                heading="Discount your products"
                action={{
                    content: 'Select products',
                    onAction: () => console.log('clicked')
                }}
                image={imgURL}
            >
                <p>Select products to change their price</p>
            </EmptyState>
        </Layout>
    </Page>
);

export default Index;