import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      fetch()
        .then((response) => {
          console.log(response)
        })
    }
    catch {
      console.log(error)
    }
  }

  const handleEmail = (e) => {
    setEmail = e.value.target
  }

  const handlePassword = (e) => {
    setPassword = e.value.target
  }

  return (
    <div id='loginPage'>
      <div id='loginCard'>
        <div id='loginCardContainer'>
          <div id='loginCardHeader'>
            <div>
              <h2>
                SoloSync Sign In
              </h2>
            </div>
            <div>
              <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUSExcTExMXFxEXFxMTGBkaGRgXExoXGBcYGBgZFxUaHysjGh8oHxcXJDUkKCwuMzIyGiE3PDcxOysxMi4BCwsLDw4PHRERHDEoIykxMS45MTMxMTIxMTExMzExMS4zMjE5MTExMTMxMTMxLjExMTExMTIxMjExMTExMTExM//AABEIALMBGgMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQIDBAYHAf/EAEIQAAIBAgMDCQQHBgYDAQAAAAABAgMRBAUhBhIxEyIyQVFhcYGRI6GxwQcUQlJictEzgpKissIWQ1Ph8PElRGMV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/EADERAAIBAwEDCgYDAQAAAAAAAAABAgMEESETMVEFEkFhcYGxwdHwFCIjMqHhM5Hxgv/aAAwDAQACEQMRAD8A7MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwtct2AF4Fh17cS7CSauuABUAAAAAAAAAAAAAAAAAAAAAAAACic0ld8Cz9YAMkGL9Ztx4GRF31XAAqAAAAAAAAAAAAAAAAABhZpW3YL8TS+L+RiQxBd2ipt0XKPGHP8UuPubNWo5vF/aXqNx6k3uNjq4guZNibylDu3l62fxRrNbMlbiS2x6c3Oq+j0I9+t5W9EvUHhsoAAAAAAAAAAAAAAAAAAAAAAAIrNq9pqPdvet18jHWILW1qcHCquj0JdzvePrd+4ho47vAJqriDPyOvvQkvuy9zV/wBTUq+PS6zatmqEoUU5K0pvft1pWSSfkr+YBKgAAAAAAAAAAAAAAETtDnMMLC7s5vox+b7jLzLGRoU5VJPSK9X1I5HnmZSxFSU5vTi+zuSIK1XmLC3s1OTLD4mTnP7Fv6+r1GeZvWxUm51Hu30V2orwXDzMKjJtc1yklxaTa82bRs/swpUliMVHp2VKk9FZ8J1F16Xajw7eNluWWUqdOCpwjGMErJJJIhjbc75pPU06/LaovZ0I6LuXnntOVU6/C+sbq6Tav2o6ns7mUKtCE6cFGNt3cT6NtGr9dmmRu0eydLFc+EuSq/eSvGXdJaX8TF2UyTE4XfhUlDccrq0m76auzjp1edyalCcJYe4zr64t7qkqkUozT1XFd2/x/ButOakrplZEZdWSrOG8ruDla+rs1ql5skqtaMelJLxaXxJzJLoI/E5rQpq860F2JPek/CEbt+SIbH7U2T5Gk211ze7HxUVzn4OxxKpGO9k9K1rVdYxeOO5f2/8ASXxec4ek3GpXpxkuKclvLxS4FmntJhJNKOIg23ZLXV+hybHwdScpy1lKUpN9bbdz3LIOE99R3mlorpe9lRXU3LGEfQy5Ct4UXOU3lLqxk7bCSaTTunqn1WKzT8jzms6UVCFFtX0lVcZK7vZ81ol8rzOrOpydaioSalKLhPlIWjbe3nZbr5yt2l5anzMlzW0TJC5ztFRw1RU6m85uO/zUnZXsr3a7GTRyTbKvvZrVT4KlGmvJU5/HeLNpRjVqqMt3tFa5qunTco7zeI7Y4Z/6n8K/Ul8tzCniI71KV0nZ9TT70cnTj2E1sznCwspvdcozUU0nZ3V7P3s0rnk2mqbdLOetmfb385TSqYx1HSgQ+B2iw9XTlN2XZLm+96EpykfvL1Rjzpzg8SWDVjOM1mLyXDHxNdQ6m32K3vbK61VQi5SdorW5znOtpqt3yaSu27v9Ee0qU6rxBZPKlSNNZk8Fzbzaeprh6doc32ml3rwSbuku9a+Bj7MYCpXoRqVJOLlfRLiruz81Z+ZquJryrVlvvelOUd98Fu9iXUrHUMhknFWXNSX/AET3EYwhGmksreyGg5TlKedHuRFwy9Yeca0oupTi7yi+pfeS67d+nxW8UKsZxU4u8ZJNPtTI2rUjwsY+QVVTqSofYadSmuxX58F4Npr8zK6xKPWvyv14dhO8p+/ftE+ADg6AAAAAAAAAABH53j1h6M6r+ytF2yfBep43hZZ1CEpyUY73oab9Iub701Qg9I9Lvm9EvLiRWxWTLFV1vq9ClacuyUuMYPz1fcrdZEV6spzc3eUpN+LlJ6289Dq+yuVrC4eFN/tHz6j7aktZeS0S7kinSW0m5s+kv6is7WNvTevHxfvyLW0k9YRXUpS+CXzNdxWcci7NN+CuTuea1rdlOP8AVMgM1w6s9C6fMmfl20EKi0kr9nX6F/GZmkr3Nc2Hy5VMXzopwhGc2mrp/ZSa/ev5GZtbslV3nUw8pTpPV0786D/BfpR7uK7+oDXs72gny0Z0pP2d0muN29dPL4ljG5hLGPlqr57SWitFKOiSTvbt8WzExGBcZWknGXZJOMvRjdlFK8Xu9UrOz8GU69NvsPouTLylHEcYaT16cZy9e0yqeO3I2V7LssvgW6maSeiVr6euhjxrLsEmna33kyvzWjZVanJ5wZjmZeR2c5d0fi1+hg6EhkjW8/y/NHtOPzI4vKidCaXDzRv2xyXJyVvtL4InkiC2PXs5v8fwS/UnjSjuPi6v3sHGdq3/AOTq/na/kOzHGNqoWzSr+dv1gv1NHk7+Vvq80Z19/GlxePwzxJHlaairld0WcTJWXj8mbcqmhlwpYehVDFlcailrbu4mNGreyjFyk9EkrtvuSJfJ8gxNZ3nGNGn2z5034U0/i0RyuoQ1bx3nStpz039x7/8AvVI0Pqysop729duST13V1JXu/MhpOpVmqdKLqVZXsoptpLi9DbobPYSlNTr1XVlZRUXaNPx3U9fNk9gpUKX7KlThpbmxjF272lqZs7+nHnbKOr1z1+JejZzljaPRaYNKyzYfEKUalXdpRurpyUqjXXaMbq/izdbxpQUI6RSsv9yvE46Nuo1nPs33U1HWX/OJltt6s0EsaIzsZmeu7FNy7tS1iMVKi6VZ8YzV1+GSakvPQs7PU+bvS1k9Wy7tPH2E+7df8yO6L+pHPH9HNT7Hg32Ek0mndNXT7mVkDsRjeWwsLvnQ9m/Lo+5peRPHM4OEnF9B1GSksoAA5PQAAAAAAc++krMt6cMPF6R58/zPRLyV36G75hio0acqkujGLk/JHHcZiZVJzqz6U25PxfV5KyK1zLTm8Tb5Ft8zdeW6Oi7X6L84JzYHLOWxKm1enQSm+xzfQXlrL91HUCC2Myz6thoRkrVJe0n270uryVl5E6S0oc2ODPvrjb1nLo3Ls/ZAZ1H2676cfdKX+xFZrDmsm8/jadOX5ov3NfMj8ZC8WSFQs/R7SSdaXX7NeXPZt5puy+JVKs4vSNS0f3k+b8WvM3IAonBPik/Ews5yuniYKE0rxe9F2Ts+HB8V3EgADTcdsY6iXtIR3Wmt2m4tpdTalw9SrFbC0mk6c5Rmkk76xk7Wbt1XNwB44p7zuFScPtbRw6tSnCThJNSi3FrsadmXMDRVSahK9mn1ta8eKOwYnLKNR706UJSfFuKu/FlhZDhuPIQv4EKoJM03ypKUcNEHkGy1B0YSlSi5NPWd5Pja6vwJfKsip0Km/TvDSUXGLe5K9tZR4XVtH3slqcUkklZJWSXBJFZOtDKlJyeWDku3lHczCpL70ac/WMY/2s60Q+c7P0cTJTqKSkko3i7NpNtJ6dW8/UsW1bZSbfSseBBXpbSKXXk5Nvkzsrkf12U4uW7CCi27Xd23ZL0Zuf8AgrC//T+JfoS2UZZSw0XGlGybu23dt8NWT1b3McRIoW2HlkXhdkMNTi1FS5S2lTe58X2x0t7i1iNlZS/9ur/DG38tjaAUW23llpLBDZRs/Soa2c6jTTnPV2fFJcEjzEbO0ZO8XOn3Qlzf4ZJpeRNA8PSCp7MUU+dKpLuc7L+VI1vbjARjWpxhFRjycdErLSUjoJp+0ceUxEvwqEfdvf3AGPlFO0bGJtnU3cPPvcF/MiZwlLdRbxOWfWqVeFteTtH8996P9KXmdQeJJnMllNEP9GWP3asqTfNnG6/NHVe7e9x0Y4fkeJlRqRmtJU5J+j6ztWFrqcIzj0ZJSXg1ct3sNVPj4r9EFvLRx4e/EvAApFkAAAAGJmWMjQpyqzfNgm38kNx7GLk0lvZqH0l5l0cLF9lWfgnzYvxevkQWx2W/WcTFNXp07VJ9js+bHzl7kyLxuKlVnOtPpTk2+7sivBWR0vYfK/q+HTkrValqk+1XXNj5L3tlKmtpU5zPpLuSsrRUI7/N/c/JdxsAALp80R2fQvTT+7OL9br5kbWXNJbOV7KXjH+pEVV6IBrtSVqu71s3PJMZykLSfPjo+9dTNCx03HEJtNRktH1Npu9n3XXqbFgK7g4zXVxXautAG2AopzUkpLg0mvMrAAAAAAAAAAAAAAAAAAAAAABrEqO9WqSf35W8E7fIncwr7kdOk9F+vkRUVuoAtYuoook8houFJN9Kbc358PckRGCgq9bdfQgt9rts1Ze82gA5Jt3l31fGSklanV9pHsu3z163fmjbvo4zLlKToyfOp6r8revo37zL29yj6zhnuq9WnepDtdlzo+a96RzzZjNHQqwmup2ku2L0aNGl9ei4dK8ej0KdT6VRS6DsoLWHqxnFTi7xkk0+5l0zi4AAADnX0hZvytT6tB+zptSm+pzX2fL4k/trn/1anydNp4iaaX4V1yZznCYadWcaVNOU5St4t6uUn6tsq155+Re+o3uSrVU4/FVf+fOXp/fQiZ2Iyj6zXU5L2NJqUuyU+MY/N+HedTI3IMtjhaMaUdbayl1ym+lJ/wDOCRJE9OHMWDLvLl3FVy6OjsABTKSSu+B2VTFzf9lL93+pEPiHaJIY2vv6cIrXxITH122oR1lJqKXa2AZTytYjB7v+ZvTqQl1qabS8naz8SKyud4K5uWDpcnTjD7sUvFpas0zLuj7wDaNnqm9Sa+7Jx8tH82SZDbL9Gp+f+1EyAAAAAAAAAAAAAAAAAAAAAAQuNqb9V9keavn7/gR2b4rciy9TneUn2yk/eyH2njLc30m4xac7dSeib7rtAEpsc+fJvi4v4pm0mg5Ji1pZ2Zt+X4zf0l0vc/8AcAzzlW3mSvC4jlYL2FVt90Z8ZR+a8+w6qYea4CGIpSpVFeElbvT6mn1NMlo1XTlk4qQU44Zp+wGepewqPmvWDfU31efx8TfDjWbZbUwVXk6nDjTmuEo9q7+1G5bKbVKSVKu7SWil3d/6+vaXLihtVtaevFeaKtGrzHs593p6G5gohJNXTunrdcCszi6cTrValWo5SbnWm/FtvhGK7O46PsZs8sLDlKiTxE1r17keO4n8We7K7Mwwq5Sdp12tZfZj2qP6/A2QgpUubq95qX/KDrvmQ0j4/oA8uLk5lhsisXid5/hXDv72XMxxF3uLh19/cQmZYrdTAKcyx1tFx4JdfkSWz2VOHtav7VrRfcT/ALn1+naW9n8r3bVq3TesIv7CfW/xfAm5VkAV1OD8H8DSsvXMXgbbUxOj8GargY6WAJzZfo1Pz/2omCByybpX61KzfiSuHxMZaX17OsAygeJi4B6Dy56AAAAAAAAeXFwD0FDkeOYBcBZczzlADXodKX5pfFmXlcVKpKLScZQkmnqmrx0aMSHSl+aXxZk5ZO1W/wCGXxQBru0GTywc+Up3eHk/F02/svu7H5Pvzsqxe8lrqbJi8RTcGqlnBppp6pp8VbrNIoUOTqyVO7pbz3L8d3vAN7wGI31Z9Jce/vMs17K5SbTWluL+RL77ALecZZSxNN06sbx4p8JRf3ovqZzTP9m6+EblZ1KPFVIrWP54rWPjwOnOcuwolVqdUSajXnSfykdSlGosM5llG0daj0J70fuvh6PTzVmTv+O6n+lH0l+pnZzs5TrNy+rqE39qnLk3ftatuvzRCf4Kn9+XrH9C98Vbz1qQ198CpsK0NIT098ToUajZUmXd1HtjLL5QUTbL1g0AQmaV7c7ck2uxX0MWVWnVVr2fY01L0aubHyaHJoAgsPOd93VxS42t/wBmZGDJHk0OTQBHSoXLEMqiuF15kxyaPd1AEZDLo9r9WZGHwkYaxWvb1+pmWFgC0olaRUegFNj09AB4D0AHgPQAUtFLRcABZaKWi+LAGHV01Mbfb4cO0lHBdhjvBQ6o28G17kAR8sOkjDpv2nk18Cb+oQ7/AFZ7DBQXCKXxAIjEZdytrtq3BpnkMoaVlP1imydjTsVKIBDYLLJU/wDMk/H9ESdKm0ZFhYApUSqx6ADywsegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z'/>
            </div>
          </div>
          <div>
            <form id='form' onSubmit={handleSubmit}>
              <div>
                <input name='email' placeholder="Email" onChange={handleEmail}></input>
              </div>
              <div>
                <input name='password' placeholder="Password" onChange={handlePassword}></input>
              </div>
              <div>
                <Link>Forgot Password?</Link>
              </div>
              <div>
                <button id='signInBtn' type='submit'>Sign In</button>
              </div>
            </form>
            <hr></hr>
          </div>
            <div id='signUpPart'>
              <p>Don't have an account?</p>
                <Link to='/SignUp'><button id="signUpBtn">Sign Up</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
