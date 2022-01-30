import { Banner, TitleContainer } from '../components/banner';
import Layout from '../layout';
function Origin() {
    return (
        <Layout>
            <Banner bg="bg-about"
                active="Origin"
                title="Our Origin"
                desc="We are a Pan African company serving over 244+ financial institutions and other corporations across 25 countries in Africa today."
            />
            <TitleContainer title="Our Origin" />
            <div className='md:px-20 px-10 w-full h-12   border-gray-50 border-2  shadow-gray-600'>
                <div class="flex flex-wrap flex-row">
                    <p className=' float-right'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at scelerisque mauris, quis placerat risus. Vivamus est eros, dapibus et dui posuere, feugiat volutpat leo. Donec suscipit, purus nec feugiat varius, nulla turpis egestas dui, vulputate hendrerit magna lacus ac dolor. Proin tincidunt porttitor lectus sit amet iaculis. Ut in tincidunt mi. Phasellus ac ante vitae urna elementum rhoncus. Donec blandit mauris et dolor fringilla aliquet. Sed sem nisl, finibus vitae odio at, ullamcorper tristique arcu. Donec nec dolor eget mi condimentum mattis. Nam non arcu erat. Phasellus et augue aliquet, tempor felis ac, bibendum risus. Integer eu est lectus. Quisque laoreet purus massa, non ultrices lectus maximus fermentum. Sed aliquet diam vel nibh vulputate, vel dignissim justo pellentesque.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Origin;
