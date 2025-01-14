"use client"
import React, { FC } from "react";
import { ILoginData } from "@/typings/logout.interfaces";
import GoogleSvg from "@/components/svg/google";
import FacebookSvg from "@/components/svg/facebook";
import { loginWithFacebook } from "@/fire-base/auth/facebook";
import { loginWithGoogle } from "@/fire-base/auth/google";
import styles from "@/app/user/LoginBtn.module.scss";
import AppleSvg from "@/components/svg/apple";
import classNames from "classnames";
import { loginWithApple } from "@/fire-base/auth/apple";

// 三方登陆获取信息
export interface ILoginData {
  loginType: "google" | "facebook";
  avatar: string;
  bindId: string;
  email: string;
  userName: string;
}

interface IProps {
  aa?: string;
}

const LoginBtn: FC<IProps> = ({ aa }) => {

  const onGGLogin = () => {
    loginWithGoogle();
  }

  const onFBLogin = () => {
    loginWithFacebook()
  }

  const onAppleLogin = () => {
    loginWithApple();
  }

  // 登陆
  const onLogin = (data: ILoginData) => {
    // const { loginType, bindId, email } = data;
    // if (loginType === "facebook") {
    //   try {
    //     const FB = window.FB;
    //     if (FB) {
    //       FB.getLoginStatus(function(response: any) {
    //         if (response.status === 'connected') {
    //           // 用户已登录，需要注销,方便下次切换用户
    //           FB.logout(function() {
    //             console.log('fb User is logged out');
    //           });
    //         }
    //       });
    //     }
    //   } catch (e) {}
    // }
    // if (bindId) {
    //   netLogin({ loginType, bindId, email }, appName).then(res => {
    //     if (res.haveUser && res.userStatus === EUserStatus.Normal) {
    //       setUserTemp(prevState => ({
    //         ...prevState,
    //         uid: res.uid,
    //         loginType,
    //         bindId: encryptAES(bindId),
    //         deviceInfo: res.deviceInfo || "",
    //         thirdInfo: res.thirdInfo || "",
    //       }))
    //       setUserInfo({
    //         userId: decryptAES(res.uid),
    //         avatar: res.userAvatar || "",
    //         userName: decryptAES(res.nikeName || "") || ""
    //       })
    //       // 获取用户信息成功；
    //       setStepCount(1);
    //     } else {
    //       // 账号未绑定过DramaBox的用户ID，请切换账号重试
    //       ToastShow("账号未绑定过DramaBox的用户ID，请切换账号重试");
    //       // Dialog.alert({
    //       //   bodyClassName: classNames(styles.dialogBody, styles.dialogAlert),
    //       //   maskStyle: { background: 'rgba(0,0,0,0.6)' },
    //       //   content: t('theAccount1') + appName + t('theAccount2'),
    //       //   confirmText: t('iKnow'),
    //       // });
    //     }
    //   }).catch(() => {
    //     // 登陆失败异常
    //     ToastShow("登陆失败，请重试");
    //   });
    // } else {
    //   // 登陆失败异常
    //   ToastShow("登陆失败，请重试");
    // }
  }

  return <>
    <button
      className={classNames(styles.loginBtn, styles.fbLoginBtn)}
      onClick={() => onFBLogin()}
    >
      <FacebookSvg className={styles.mediaIcon} />
      <span>Sign in with Facebook</span>
    </button>

    <button className={styles.loginBtn} onClick={() => {
      onGGLogin()
      // ToastShow("登陆失败，请重试");
    }}>
      <GoogleSvg className={styles.mediaIcon}/>
      <span>Sign in with Google</span>
    </button>

    <button className={styles.loginBtn} onClick={() => {
      onAppleLogin()
      // ToastShow("登陆失败，请重试");
    }}>
      <AppleSvg className={styles.mediaIcon}/>
      <span>Sign in with Apple</span>
    </button>
  </>
}

export default LoginBtn;
