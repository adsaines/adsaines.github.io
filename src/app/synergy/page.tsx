import { NextPage } from "next";

const Synergy: NextPage = () => {
    return (
        <div className="h-full overflow-auto flex flex-col justify-start gap-4 p-10">
            <h1><span className="text-2xl">synergy</span><span> noun</span></h1>
            <h2>syn·​er·​gy</h2>
            <p className="pl-4">
                : a mutually advantageous conjunction or compatibility of distinct business participants or elements (such as resources or efforts)
            </p>
            <p className="pl-4">
                I was promised that synergy between me and my brother would increase as time went on, but he just kept saying we needed to synergize harder.
            </p>
            
            <h1 className="pt-10"><span className="text-2xl">facetious</span><span> adjective</span></h1>
            <h2>fa·​ce·​tious</h2>
            <p className="pl-4">
                : joking or sarcastic especially in a way regarded by others as silly, annoying, or inappropriate
            </p>
            <p className="pl-4">
                It was innapropriate for me to add an entire page to my dev website just to make sure that my brother's feacetious (and only) comment to add "synergy" somewhere was fulfilled. It is possible that a person reviewing my resume page has found this instead of just bouncing off of my resume b/c I didn't go to an ivy league school. In this instance my facetious joke, which is this page existing, may turn them off even more. To them I say: we all must smile at some point.
            </p>
        </div>
    )
}

export default Synergy;