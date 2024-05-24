import Spinner from "@/ui/start-page/spinner/Spinner";

const Loading = () => {
    return <div style={{marginTop: '30px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000000000}}><Spinner/></div>
}

export default Loading;