import { dotSpinner } from 'ldrs'

export const Loader = () => {
  dotSpinner.register()

	return (
        <div className="container-loader flex justify-center">
            <l-dot-spinner
              size="40"
              speed="0.9" 
              color="black" 
            ></l-dot-spinner>
        </div>
    )
};

