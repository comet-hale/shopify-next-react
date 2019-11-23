import {
    Layout,
    Page,
    EmptyState,
} from '@shopify/polaris';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';

const imgURL = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
    state = { open: false };
    render() {
        return (
            <Page>
                <TitleBar
                    primaryAction={{
                        content: 'Select products',
                    }}
                />
                <ResourcePicker
                    resourceType="Product"
                    showVariants={false}
                    open={this.state.open}
                    onSelection={(resources) => this.handleSelection(resources)}
                    onCancel={() => this.setState({ open: false })}
                />
                <Layout>
                    <EmptyState
                        heading="Discount your products"
                        action={{
                            content: 'Select products',
                            onAction: () => this.setState({ open: true }),
                        }}
                        image={imgURL}
                    >
                        <p>Select products to change their price</p>
                    </EmptyState>
                </Layout>
            </Page>
        );
    }
    handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        this.setState({ open: false });
        console.log(resources);
    };
}

export default Index;