
https://gist.github.com/dannysperry/23fee9c11259e599fcbd
https://re-ws.pl/2018/05/security-analysis-of-spy-camera-sold-by-chinese-suppliers-iminicam-app/
https://re-ws.pl/2018/05/pppp-api-what-i-know/
https://github.com/nosoop/pppp_api
https://imgur.com/a/b4qQvEG
https://hacked.camera/cves/#cs2
https://github.com/K-Francis-H/little-stars-hack
https://github.com/DEEFRAG/A9
https://github.com/HoffmannP/A9
https://github.com/datenstau/A9_PPPP <=== BÄST!
https://github.com/dbuezas/ha-addons/tree/main/a9-cam

https://github.com/AlexxIT/go2rtc#source-exec

open firmware: https://github.com/daniel-dona/beken7252-opencam
java version: https://github.com/aayes89/JCam

https://github.com/intx82/a9-v720
https://www.domoticz.com/forum/viewtopic.php?p=290401#p290401
https://github.com/pmarrapese/iot/tree/master/p2p/dissector
https://community.home-assistant.io/t/popular-a9-mini-wi-fi-camera-the-ha-challenge/230108/105


void com::shix::shixipc::BaseActivity::StartPPPP
               (BaseActivity *this,String *p1,String *p2,String *p3,String *p4)

  pSVar2 = (*p1->substring)(p1,0,3);
  bVar1 = (*pSVar2->equalsIgnoreCase)(pSVar2,(String *)"GBE");
  if (bVar1 == false) {
    bVar1 = (*pSVar2->equalsIgnoreCase)(pSVar2,(String *)"OBJ");
    if (bVar1 == false) {
      pSVar2 = (String *)"EBGAEIBIKHJJGFJJEEHOFAENHLNBHGNMHMFDAADAAOJNKNKG";
    }
    else {
      pSVar2 = (String *)"EBGAEOBOKHJMHMJMENGKFIEEHBMDHNNEGNEBBCCCBII";
    }
  }
  else {
    pSVar2 = (String *)"EBGAEIBIKHJJGFJKEOGIFKEFHCMCHMNBG";
  }
  (*NativeCaller_StartPPPP)(p1,p2,p3,pSVar2);

void com::shix::shixipc::activity::FragmentAlarm::onItemClick
               (FragmentAlarm *this,AdapterView *p1,View *p2,int p3,long p4)

  pSVar3 = (*ref->getDev_Did)(ref);
  iVar4 = (*ref->getResetrict)(ref);
  bVar1 = (*this->checkChina)(this,pSVar3,iVar4);


/* Function: cs2p2p_PPPP_thread_recv_LanSearch */
/* cs2p2p_PPPP_thread_recv_LanSearch(void*) */

void cs2p2p_PPPP_thread_recv_LanSearch(void *param_1)

{
  int *piVar1;
  int __fd;
  int iVar2;
  char cVar3;
  long lVar4;
  uchar local_51b;
  ushort uStack_51a;
  sockaddr_in asStack_518 [16];
  char acStack_508 [1280];
  undefined8 local_8;

  local_8 = *(undefined8 *)PTR___stack_chk_guard_0088c5a0;
  __fd = cs2p2p_setup_listen_port(0x7d6c);

oid cs2p2p_PPPP_Connect_Do
               (char *param_1,int param_2,char *param_3,char param_4,ushort param_5,char *param_6,
               char *param_7)

          cs2p2p_PPPP_Proto_Send_LanSerch
                    (pcVar3,*(int *)(PTR_cs2p2p_gSession_0088a910 + lVar35),0x7d6c);

void cs2p2p_PPPP__DoNetWorkDetect
               (char *param_1,char param_2,st_cs2p2p_NetInfo *param_3,ushort param_4,char *param_5,
               sockaddr_in *param_6,sockaddr_in *param_7,sockaddr_in *param_8)

void __thiscall
CPPPPChannel::ProcessCommand(CPPPPChannel *this,int param_1,char *param_2,int param_3)
... lång lista med kommando-id:n.
  case 0x6001:
    memset(&local_2a10,0,0xfc);
    iVar7 = CCgiPacket::UnpacketStatusParam
                      ((CCgiPacket *)(this + 0x7c0),param_2,(tag_STRU_CAMERA_STATUS *)&local_2a10);
    if (iVar7 != 0) {
      memcpy(auStack_6530,&local_2a10,0xfc);
      ProcessCameraStatusParams(this,(tag_STRU_CAMERA_STATUS)auStack_6530);
    }

undefined8 __thiscall
CCgiPacket::UnpacketPtzParam(CCgiPacket *this,char *param_1,tag_STRU_PTZ_PARAMS *param_2)

{
  SscanfInt(param_1,"ptz_patrol_rate=",(int *)(param_2 + 3));
  SscanfInt(param_1,"ptz_patrol_up_rate=",(int *)(param_2 + 4));
  SscanfInt(param_1,"ptz_patrol_down_rate=",(int *)(param_2 + 5));
  SscanfInt(param_1,"ptz_patrol_left_rate=",(int *)(param_2 + 6));
  SscanfInt(param_1,"ptz_patrol_right_rate=",(int *)(param_2 + 7));
  SscanfInt(param_1,"ptz_center_onstart=",(int *)(param_2 + 1));
  SscanfInt(param_1,"ptz_disppreset=",(int *)(param_2 + 8));
  SscanfInt(param_1,"led_mode=",(int *)param_2);
  SscanfInt(param_1,"preset_onstart=",(int *)(param_2 + 9));
  SscanfInt(param_1,"ptruntimes=",(int *)(param_2 + 2));
  return 1;
}

void __thiscall CPPPPChannel::SendPtzSetting(CPPPPChannel *this,char *param_1,int param_2)

{
  long lVar1;
  undefined8 uVar2;
  char acStack_238 [512];
  long local_38;

  lVar1 = tpidr_el0;
  local_38 = *(long *)(lVar1 + 0x28);
  uVar2 = 0xffffffff;
  if ((param_1 != (char *)0x0) && (param_2 == 0x28)) {
    memset(acStack_238,0,0x200);
    sprintf(acStack_238,
            "set_misc.cgi?led_mode=%d&ptz_center_onstart=%d&ptz_run_times=%d&ptz_patrol_rate=%d&ptz_patrol_up_rate=%d&ptz_patrol_down_rate=%d&ptz_patrol_left_rate=%d&ptz_patrol_right_rate=%d&ptz_dispreset=%d&ptz_preset=%d&"
            ,(ulong)*(uint *)param_1,(ulong)*(uint *)(param_1 + 4),(ulong)*(uint *)(param_1 + 8),
            (ulong)*(uint *)(param_1 + 0xc),(ulong)*(uint *)(param_1 + 0x10),
            (ulong)*(uint *)(param_1 + 0x14),*(undefined4 *)(param_1 + 0x18));
    uVar2 = cgi_get_common(this,acStack_238);
  }
  if (*(long *)(lVar1 + 0x28) == local_38) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail(uVar2);
}

void __thiscall CPPPPChannel::cgi_livestream(CPPPPChannel *this,int param_1,int param_2)

void cs2p2p_PPPP_Proto_Send_P2PRdy
               (char *param_1,int param_2,sockaddr_in *param_3,char *param_4,uint param_5,
               char *param_6)

{
  undefined *puVar1;
  st_cs2p2p_SessionHeader asStack_108 [4];
  st_cs2p2p_P2PRdy asStack_104 [252];
  long local_8;

  puVar1 = PTR___stack_chk_guard_0088c5a0;
  local_8 = *(long *)PTR___stack_chk_guard_0088c5a0;
  cs2p2p_PPPP_Proto_Write_Header(asStack_108,'B',0x14);
  cs2p2p_PPPP_Proto_Write_P2PRdy(asStack_104,param_4,param_5,param_6);
  cs2p2p_SendMessage(param_1,(char *)asStack_108,0x18,param_2,param_3);
  if (local_8 == *(long *)puVar1) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}

/* Function: cs2p2p_PPPP_Proto_Write_Header */
/* cs2p2p_PPPP_Proto_Write_Header(st_cs2p2p_SessionHeader*, unsigned char, unsigned short) */

void cs2p2p_PPPP_Proto_Write_Header(st_cs2p2p_SessionHeader *param_1,uchar param_2,ushort param_3)

{
  *param_1 = (st_cs2p2p_SessionHeader)0xf1;
  *(ushort *)(param_1 + 2) = param_3 >> 8 | (ushort)(((ulong)param_3 & 0xff00ff00ff00ff) << 8);
  param_1[1] = (st_cs2p2p_SessionHeader)param_2;
  return;
}

/* Function: cs2p2p_SendMessage */
/* cs2p2p_SendMessage(char const*, char*, int, int, sockaddr_in*) */

void cs2p2p_SendMessage(char *param_1,char *param_2,int param_3,int param_4,sockaddr_in *param_5)

{
  char cVar1;
  size_t __n;
  sockaddr asStack_5c8 [2];
  uchar auStack_5a8 [1440];
  long local_8;

  __n = (size_t)param_3;
  local_8 = *(long *)PTR___stack_chk_guard_0088c5a0;
  memset(auStack_5a8,0,0x5a0);
  if ((param_1 == (char *)0x0) || (*param_1 == '\0')) {
    memcpy(auStack_5a8,param_2,__n);
    cVar1 = *PTR_cs2p2p_gbUseIPv6_0088ae48;
  }
  else {
    cs2p2p__P2P_Proprietary_Encrypt(param_1,(uchar *)param_2,auStack_5a8,(ushort)param_3);
    cVar1 = *PTR_cs2p2p_gbUseIPv6_0088ae48;
  }
  if (cVar1 == '\x01') {
    cs2p2p_SockAddr_4to6(param_5,(sockaddr_in6 *)asStack_5c8);
    sendto(param_4,auStack_5a8,__n,0,asStack_5c8,0x1c);
  }
  else {
    *(undefined2 *)param_5 = 2;
    sendto(param_4,auStack_5a8,__n,0,(sockaddr *)param_5,0x10);
  }
  if (local_8 != *(long *)PTR___stack_chk_guard_0088c5a0) {
                    /* WARNING: Subroutine does not return */
    __stack_chk_fail();
  }
  return;
}
====

    sprintf(acStack_858,"GET /%sloginuse=%s&loginpas=%s&user=%s&pwd=%s&",param_1,pCVar2,pCVar3,
            pCVar2,pCVar3);

      iVar5 = CCircleBuf::Write(this_00,puVar7,iVar5 + 0x18);

undefined8 __thiscall CPPPPChannel::StopAudio(CPPPPChannel *this)

{
  long lVar1;
  char *pcVar2;
  char acStack_138 [256];
  long local_38;

  lVar1 = tpidr_el0;
  local_38 = *(long *)(lVar1 + 0x28);
  if (*(int *)(this + 0xdc) == 1) {
    if (*(int *)(this + 0x794) == 0) goto LAB_001fe058;
    pcVar2 = "audiostream.cgi?streamid=16&";
  }
  else {
    if (*(int *)(this + 0x794) == 0) goto LAB_001fe058;
    memset(acStack_138,0,0x100);
    sprintf(acStack_138,
            "{\"pro\":\"stream\",\"cmd\":111,\"audio\":0,\"user\":\"%s\",\"pwd\":\"%s\"}",this + 300
            ,this + 0x16c);
    pcVar2 = acStack_138;
  }
  cgi_get_common(this,pcVar2);

TVÅ OLIKA METODER!!!

  if (*(int *)(this + 0xdc) == 1) {
    if (*(int *)(this + 0x794) == 0) goto LAB_001fe058;
    pcVar2 = "audiostream.cgi?streamid=16&";
  }
  else {
    if (*(int *)(this + 0x794) == 0) goto LAB_001fe058;
    memset(acStack_138,0,0x100);
    sprintf(acStack_138,
            "{\"pro\":\"stream\",\"cmd\":111,\"audio\":0,\"user\":\"%s\",\"pwd\":\"%s\"}",this + 300
            ,this + 0x16c);
    pcVar2 = acStack_138;
  }

    sprintf(acStack_b8,"decoder_control.cgi?command=%d&onestep=1&",(ulong)(uint)param_1);
  cgi_get_common(this,acStack_b8);



/* Function: Java_object_p2pipcam_nativecaller_NativeCaller_PPPPSetCallbackContext */
undefined8
Java_object_p2pipcam_nativecaller_NativeCaller_PPPPSetCallbackContext
          (long *param_1,undefined8 param_2,long param_3)

{
  undefined8 uVar1;
  undefined8 uVar2;

  if (param_3 == 0) {
    *(undefined8 *)PTR_g_CallBackObj_0088a1c8 = 0;
    *(undefined8 *)PTR_g_CallBack_SetSystemParamsResult_0088a7d8 = 0;
    *(undefined8 *)PTR_g_CallBack_CameraParams_0088d0e8 = 0;
    *(undefined8 *)PTR_g_CallBack_WifiParams_0088d050 = 0;
    *(undefined8 *)PTR_g_CallBack_UserParams_0088c798 = 0;
    *(undefined8 *)PTR_g_CallBack_FtpParams_0088a748 = 0;
    *(undefined8 *)PTR_g_CallBack_DDNSParams_0088b7f0 = 0;
    *(undefined8 *)PTR_g_CallBack_MailParams_0088cd68 = 0;
    *(undefined8 *)PTR_g_CallBack_DatetimeParams_0088a4c0 = 0;
    *(undefined8 *)PTR_g_CallBack_NetworkParams_0088cd28 = 0;
    *(undefined8 *)PTR_g_CallBack_CameraStatusParams_0088a298 = 0;
    *(undefined8 *)PTR_g_CallBack_PTZParams_0088c8c8 = 0;
    *(undefined8 *)PTR_g_CallBack_WifiScanResult_0088c890 = 0;
    *(undefined8 *)PTR_g_CallBack_AlarmParams_0088c870 = 0;
    *(undefined8 *)PTR_g_CallBack_AlarmNotify_0088acb0 = 0;
    *(undefined8 *)PTR_g_CallBack_RecordFileList_0088cd90 = 0;
    *(undefined8 *)PTR_g_CallBack_PlaybackVideoData_0088b010 = 0;
    *(undefined8 *)PTR_g_CallBack_H264Data_0088b830 = 0;
    *(undefined8 *)PTR_g_CallBack_RecordSchParams_0088db28 = 0;
    *(undefined8 *)PTR_g_CallBack_SearchResult_0088db60 = 0;
    *(undefined8 *)PTR_g_CallBack_PPPPMsgNotify_0088b4b8 = 0;
    *(undefined8 *)PTR_g_CallBack_MessageNotify_0088d098 = 0;
    *(undefined8 *)PTR_g_CallBack_VideoData_0088a640 = 0;
    *(undefined8 *)PTR_g_CallBack_AudioData_0088ca28 = 0;
    *(undefined8 *)PTR_g_CallBack_APPVersionCallBack_0088b5e8 = 0;
    *(undefined8 *)PTR_g_CallBack_TransferMessage_0088bc28 = 0;
    *(undefined8 *)PTR_g_CallBack_SendMusicProcess_0088d538 = 0;
    *(undefined8 *)PTR_g_CallBack_CheckHandle_0088cce0 = 0;
    *(undefined8 *)PTR_g_CallBack_ConnectLookCallBack_0088dfc8 = 0;
    *(undefined8 *)PTR_g_CallBack_TYPEMODE_0088ccb8 = 0;
    *(undefined8 *)PTR_g_msgfield_0088a998 = 0;
    *(undefined8 *)PTR_g_CallBack_PlayBackAudioAACTrans_0088bb60 = 0;
    *(undefined8 *)PTR_g_CallBack_PlayBackAudioPCMTrans_0088af48 = 0;
    *(undefined8 *)PTR_g_CallBack_MJTCPTrans_0088b258 = 0;
    *(undefined8 *)PTR_g_CallBack_VideoTrans_H264H265_0088c058 = 0;
    *(undefined8 *)PTR_g_CallBack_DownLoad_0088c018 = 0;
  }
  else {
    uVar1 = (**(code **)(*param_1 + 0xa8))(param_1,param_3);
    *(undefined8 *)PTR_g_CallBackObj_0088a1c8 = uVar1;
    uVar1 = (**(code **)(*param_1 + 0xf8))(param_1,param_3);
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"MessageNotifyDNS",&DAT_0060a2f1);
    *(undefined8 *)PTR_g_msgfield_0088a998 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_TYPEMODE","(Ljava/lang/String;Ljava/lang/String;)V");
    *(undefined8 *)PTR_g_CallBack_TYPEMODE_0088ccb8 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_Snapshot","(Ljava/lang/String;[BI)V");
    *(undefined8 *)PTR_g_CallBack_Snapshot_00889e88 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_AlarmNotify",
                       "(Ljava/lang/String;Ljava/lang/String;)V");
    *(undefined8 *)PTR_g_CallBack_AlarmNotify_0088acb0 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_PlaybackVideoData","(Ljava/lang/String;[BIIIIIIII)V")
    ;
    *(undefined8 *)PTR_g_CallBack_PlaybackVideoData_0088b010 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"PPPPMsgNotify","(Ljava/lang/String;II)V")
    ;
    *(undefined8 *)PTR_g_CallBack_PPPPMsgNotify_0088b4b8 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_H264Data","(Ljava/lang/String;[BIII)V");
    *(undefined8 *)PTR_g_CallBack_H264Data_0088b830 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"SearchResult",
                       "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V"
                      );
    *(undefined8 *)PTR_g_CallBack_SearchResult_0088db60 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"MessageNotify","(Ljava/lang/String;II)V")
    ;
    *(undefined8 *)PTR_g_CallBack_MessageNotify_0088d098 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"VideoData","(Ljava/lang/String;[BIIIIII)V");
    *(undefined8 *)PTR_g_CallBack_VideoData_0088a640 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"AudioData","([BI)V");
    *(undefined8 *)PTR_g_CallBack_AudioData_0088ca28 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBackTransferMessage",
                       "(Ljava/lang/String;Ljava/lang/String;I)V");
    *(undefined8 *)PTR_g_CallBack_TransferMessage_0088bc28 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_Checkhandle",
                       "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V"
                      );
    *(undefined8 *)PTR_g_CallBack_CheckHandle_0088cce0 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_VideoTrans_H264H265","(Ljava/lang/String;[BIII)V");
    *(undefined8 *)PTR_g_CallBack_VideoTrans_H264H265_0088c058 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"AudioDataPlayBack","([BI)V");
    *(undefined8 *)PTR_g_CallBack_PlayBackAudioAACTrans_0088bb60 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"AudioPCMDataPlayBack","([BII)V");
    *(undefined8 *)PTR_g_CallBack_PlayBackAudioPCMTrans_0088af48 = uVar2;
    uVar1 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_MJTCPTrans","(Ljava/lang/String;Ljava/lang/String;)V"
                      );
    *(undefined8 *)PTR_g_CallBack_MJTCPTrans_0088b258 = uVar1;
  }
  return 1;
}




cgi_get_common1 ==> GET / etc
cgi_get_common ==> proc: name, ... style -- nej, inte sant, kan också vara e.g.
decoder_control.cgi?command=%d&onestep=1&

  pSVar2 = (*CommonUtil_CameraControl)
                     (*SystemValue_doorBellAdmin,*SystemValue_doorBellPass,(String *)"lamp",0);
  iVar2 = (*p1->getProgress)(p1);
  pSVar3 = (*CommonUtil_CameraControl)(pSVar3,pSVar4,(String *)"bright",iVar2);
  pSVar3 = (*CommonUtil_CameraControl)(pSVar3,pSVar4,(String *)"contrast",iVar2);


CameraParmsModel * com::shix::shixipc::bean::CameraParmsModel::jsonToModel(String *p0)

{
  int iVar1;
  String *local_0;
  CameraParmsModel *ref;
  JSONObject *ref_00;
  StringBuilder *pSVar2;

  local_0 = (String *)"lamp";
  ref = new CameraParmsModel();
  ref_00 = new JSONObject(p0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"cmd",-0x6e);
  (*ref->setCmd)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"result",-0x6e);
  (*ref->setResult)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"bright",-0x6e);
  (*ref->setBright)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"contrast",-0x6e);
  (*ref->setContrast)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"icut",-0x6e);
  (*ref->setIcut)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"rotmir",-0x6e);
  (*ref->setRotmir)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"clockScreen",-0x6e);
  (*ref->setClockScreen)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"pirstatu",-0x6e);
  (*ref->setPirstatu)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"mic",-0x6e);
  (*ref->setMic)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"spk",-0x6e);
  (*ref->setSpk)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,local_0,-0x6e);
  (*ref->setLamp)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,local_0,-0x6e);
  (*ref->setLamp)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"signal",-0x6e);
  (*ref->setSignal)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"batValue",-0x6e);
  (*ref->setBatvalue)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"batStatus",-0x6e);
  (*ref->setBatstatus)(ref,iVar1);
  local_0 = (*CommonUtil_jasonPaseString)(ref_00,(String *)"qccid");
  (*ref->setQccid)(ref,local_0);
  pSVar2 = new StringBuilder();
  (*pSVar2->append)(pSVar2,(String *)"setQccid:");
  local_0 = (*ref->getQccid)(ref);
  (*pSVar2->append)(pSVar2,local_0);
  local_0 = (*pSVar2->toString)(pSVar2);
  (*CommonUtil_Log)(1,local_0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"ccidType",1);
  (*ref->setCcidType)(ref,iVar1);
  pSVar2 = new StringBuilder();
  (*pSVar2->append)(pSVar2,(String *)"getCcidType:");
  iVar1 = (*ref->getCcidType)(ref);
  (*pSVar2->append)(pSVar2,iVar1);
  local_0 = (*pSVar2->toString)(pSVar2);
  (*CommonUtil_Log)(1,local_0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"isShow4KMenu",-0x6e);
  (*ref->setIsShow4KMenu)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"machver",-0x6e);
  (*ref->setMachver)(ref,iVar1);
  (*ref->setIsShowIcutAuto)(ref,1);
  return ref;
}


     "{\"pro\":\"stream\",\"cmd\":111,\"audio\":1,\"user\":\"%s\",\"pwd\":\"%s\"}",this + 300


Boolean * com::shix::shixipc::utils::CommonUtil::SHIX_isSupportPrefix(String *p0)

{
  boolean bVar1;
  Boolean *pBVar2;
  String *pSVar3;

  bVar1 = (*p0->startsWith)(p0,(String *)"DGK");
  if ((bVar1 == false) && (bVar1 = (*p0->startsWith)(p0,(String *)"IKB"), bVar1 == false)) {
    pSVar3 = (String *)"EEE";
    bVar1 = (*p0->startsWith)(p0,pSVar3);
    if (((bVar1 == false) &&
        (((bVar1 = (*p0->startsWith)(p0,(String *)"XIAODOU"), bVar1 == false &&
          (bVar1 = (*p0->startsWith)(p0,(String *)"OEMAAA"), bVar1 == false)) &&
         (bVar1 = (*p0->startsWith)(p0,(String *)"DBG"), bVar1 == false)))) &&
       (((bVar1 = (*p0->startsWith)(p0,(String *)"DGO"), bVar1 == false &&
         (bVar1 = (*p0->startsWith)(p0,(String *)"DGB"), bVar1 == false)) &&
        (bVar1 = (*p0->startsWith)(p0,pSVar3), bVar1 == false)))) {
      pBVar2 = (*Boolean_valueOf)(false);
      return pBVar2;
    }
  }
  pBVar2 = (*Boolean_valueOf)(true);
  return pBVar2;
}

Jag tror att anledningen till att jag inte kan skicka meddelanden ligger i void CPPPPChannel::TransferMessage(char *param_1,int param_2)


1233847,5:   (*NDNCameraLiveActivity_access_800)(*this->this$0,0,0);
...
1234791,7:     (*NDNCameraLiveActivity_access_800)(*this->this$0,0,7);

0 = 2 long
1 = 3 touch

2 = 4 long
3 = 5 touch

4 = 6 long
5 = 7 touch

6 = 8 long
7 = 9 touch

från 9 touch:


  bVar1 = (*NDNCameraLiveActivity_access_700)(*this->this$0);
  if (bVar1) {
    (*NDNCameraLiveActivity_access_702)(*this->this$0,false); // p0->isSendPtzCotr
    (*NDNCameraLiveActivity_access_800)(*this->this$0,0,7);
  }

från 8 long:
  (*NDNCameraLiveActivity_access_702)(*this->this$0,true);
  (*NDNCameraLiveActivity_access_800)(*this->this$0,0,6);


  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_alarm");
  (*local_0->put)(local_0,(String *)"cmd",0x6c);
  (*local_0->put)(local_0,(String *)"user",*SystemValue_doorBellAdmin);
  (*local_0->put)(local_0,(String *)"pwd",*SystemValue_doorBellPass);
  (*local_0->put)(local_0,(String *)"pirenable",1);
  (*local_0->put)(local_0,(String *)"pirvideo",1);
  (*local_0->put)(local_0,(String *)"pirDelayTime",0xb4);
  (*local_0->put)(local_0,(String *)"pirCloudUpCount",2000);

String * com::shix::shixipc::utils::CommonUtil::startTalk(String *p0,String *p1,int p2)

{
  String *pSVar1;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"talk_send");
  (*local_0->put)(local_0,(String *)"cmd",300);
  (*local_0->put)(local_0,(String *)"user",p0);
  (*local_0->put)(local_0,(String *)"pwd",p1);
  (*local_0->put)(local_0,(String *)"isSend",p2);
  pSVar1 = (*local_0->toString)(local_0);
  return pSVar1;
}

PTR_TalkThread_0088d928

             cVar4 = AEncode(auStack_6b0,0x280,auStack_1ac,&local_6bc);
              puVar1 = &UNK_0060b196;
              if (cVar4 != '\0') {
                puVar1 = &DAT_0060b192;
              }
              __android_log_print(3,"SHIX-jni","SHIXDEV----send g711a --pcm outLen:%d isOK:%s",
                                  local_6bc,puVar1);
              pvVar7 = (void *)SendTalk(this,(char *)auStack_1ac,local_6bc);

              eller
                          CAdpcm::ADPCMEncode(*(CAdpcm **)(this + 0x7a8),auStack_6b0,0x500,auStack_1ac);
            pvVar7 = (void *)SendTalk(this,(char *)auStack_1ac,0x140);

==> PPCS_Write

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_alarm");
  (*local_0->put)(local_0,(String *)"cmd",0x6c);
  (*local_0->put)(local_0,(String *)"user",p1);
  (*local_0->put)(local_0,(String *)"pwd",p2);
  iVar1 = (*p0->getEnable)(p0);
  (*local_0->put)(local_0,(String *)"enable",iVar1);
  iVar1 = (*p0->getLevel)(p0);
  (*local_0->put)(local_0,(String *)"level",iVar1);
  iVar1 = (*p0->getAudio_out)(p0);
  (*local_0->put)(local_0,(String *)"audio_out",iVar1);
  iVar1 = (*p0->getRecord)(p0);
  (*local_0->put)(local_0,(String *)"record",iVar1);
  iVar1 = (*p0->getMsg_push)(p0);
  (*local_0->put)(local_0,(String *)"msg_push",iVar1);
  iVar1 = (*p0->getStart_min)(p0);
  (*local_0->put)(local_0,(String *)"start_min",iVar1);
  iVar1 = (*p0->getStop_min)(p0);
  (*local_0->put)(local_0,(String *)"stop_min",iVar1);
  iVar1 = (*p0->getStart_hour)(p0);
  (*local_0->put)(local_0,(String *)"start_hour",iVar1);
  iVar1 = (*p0->getStop_hour)(p0);
  (*local_0->put)(local_0,(String *)"stop_hour",iVar1);
  pSVar2 = (*local_0->toString)(local_0);
  return pSVar2;
}



String * com::shix::shixipc::bean::AlarmModel::toJson(AlarmModel *p0,String *p1,String *p2)

{
  int iVar1;
  String *pSVar2;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_alarm");
  (*local_0->put)(local_0,(String *)"cmd",0x6c);
  (*local_0->put)(local_0,(String *)"user",p1);
  (*local_0->put)(local_0,(String *)"pwd",p2);
  iVar1 = (*p0->getPirenable)(p0);
  (*local_0->put)(local_0,(String *)"pirenable",iVar1);
  iVar1 = (*p0->getPirsensitive)(p0);
  (*local_0->put)(local_0,(String *)"pirsensitive",iVar1);
  iVar1 = (*p0->getPirvideo)(p0);
  (*local_0->put)(local_0,(String *)"pirvideo",iVar1);
  iVar1 = (*p0->getPirvideotime)(p0);
  (*local_0->put)(local_0,(String *)"pirvideotime",iVar1);
  iVar1 = (*p0->getPirdelaytime)(p0);
  (*local_0->put)(local_0,(String *)"pirDelayTime",iVar1);
  iVar1 = (*p0->getPirPush)(p0);
  (*local_0->put)(local_0,(String *)"pirPush",iVar1);
  (*local_0->put)(local_0,(String *)"AalarmInterval",2);
  (*local_0->put)(local_0,(String *)"pirCloudUpCount",0x32);
  pSVar2 = (*local_0->toString)(local_0);
  return pSVar2;
}



String * com::shix::shixipc::utils::CommonUtil::SHIX_SetDateParms
                   (String *p0,String *p1,int p2,int p3)

{
  String *pSVar1;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_datetime");
  (*local_0->put)(local_0,(String *)"cmd",0x7e);
  (*local_0->put)(local_0,(String *)"user",p0);
  (*local_0->put)(local_0,(String *)"pwd",p1);
  (*local_0->put)(local_0,(String *)"tz_offset_min",p2);
  (*local_0->put)(local_0,(String *)"utc_date_time",p3);
  pSVar1 = (*local_0->toString)(local_0);
  return pSVar1;
}


String * com::shix::shixipc::utils::CommonUtil::SHIX_setMIC(String *p0,String *p1,int p2)

{
  String *pSVar1;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_vol");
  (*local_0->put)(local_0,(String *)"cmd",0x87);
  (*local_0->put)(local_0,(String *)"user",p0);
  (*local_0->put)(local_0,(String *)"pwd",p1);
  (*local_0->put)(local_0,(String *)"inputvol",p2);
  pSVar1 = (*local_0->toString)(local_0);
  return pSVar1;
}

String * com::shix::shixipc::utils::CommonUtil::SHIX_setSPK(String *p0,String *p1,int p2)

{
  String *pSVar1;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_vol");
  (*local_0->put)(local_0,(String *)"cmd",0x87);
  (*local_0->put)(local_0,(String *)"user",p0);
  (*local_0->put)(local_0,(String *)"pwd",p1);
  (*local_0->put)(local_0,(String *)"outputvol",p2);
  pSVar1 = (*local_0->toString)(local_0);
  return pSVar1;
}


button 12:
toggle to off:
  pSVar2 = (*CommonUtil_CameraControl)
                     (*SystemValue_doorBellAdmin,*SystemValue_doorBellPass,(String *)"clockScreen",0
                     );

on:
"clockScreen",1


  pSVar3 = (*CommonUtil_SHIX_setSPK)(pSVar3,pSVar4,iVar2);
  borde vara mellan 0 och 100

$26 är IR..?


icut3 och icut4, vad är skillnaden?

access_5000 signalstyrka? ivSingn

access_5400  im_zsd

popupWindow_Icut

access_3000 tv_info text view

access_5500 tv_zsd text view.

access_1800 sv_szp switch view
sv_szd

access_5202 mirror

access_1500 strDID

access_2500 strName

access_800 contrDevDee


9002 borde också funka! get_cloudinfo...
406 -- check_ota ?



 iVar1 = (*p2->indexOf)(p2,(String *)"9002");
  if (0 < iVar1) {
    pJVar3 = new JSONObject(p2);
    iVar1 = (*CommonUtil_jasonPaseInt)(pJVar3,pSVar5,-0x6e);
    if (iVar1 == 0x232a) {
      pSVar6 = (*CommonUtil_jasonPaseString)(pJVar3,(String *)"creatTime");
      *this->creatTime = pSVar6;
      iVar1 = (*CommonUtil_jasonPaseInt)(pJVar3,(String *)"days",-0x6e);
      *this->days = iVar1;
      pHVar4 = *this->mHandler;
      (*pHVar4->sendEmptyMessage)(pHVar4,0x19);
    }
  }



  local_0 = (String *)"lamp";
  ref = new CameraParmsModel();
  ref_00 = new JSONObject(p0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"cmd",-0x6e);
  (*ref->setCmd)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"result",-0x6e);
  (*ref->setResult)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"bright",-0x6e);
  (*ref->setBright)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"contrast",-0x6e);
  (*ref->setContrast)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"icut",-0x6e);
  (*ref->setIcut)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"rotmir",-0x6e);
  (*ref->setRotmir)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"clockScreen",-0x6e);
  (*ref->setClockScreen)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"pirstatu",-0x6e);
  (*ref->setPirstatu)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"mic",-0x6e);
  (*ref->setMic)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"spk",-0x6e);
  (*ref->setSpk)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,local_0,-0x6e);
  (*ref->setLamp)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,local_0,-0x6e);
  (*ref->setLamp)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"signal",-0x6e);
  (*ref->setSignal)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"batValue",-0x6e);
  (*ref->setBatvalue)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"batStatus",-0x6e);
  (*ref->setBatstatus)(ref,iVar1);
  local_0 = (*CommonUtil_jasonPaseString)(ref_00,(String *)"qccid");
  (*ref->setQccid)(ref,local_0);
  pSVar2 = new StringBuilder();
  (*pSVar2->append)(pSVar2,(String *)"setQccid:");
  local_0 = (*ref->getQccid)(ref);
  (*pSVar2->append)(pSVar2,local_0);
  local_0 = (*pSVar2->toString)(pSVar2);
  (*CommonUtil_Log)(1,local_0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"ccidType",1);
  (*ref->setCcidType)(ref,iVar1);
  pSVar2 = new StringBuilder();
  (*pSVar2->append)(pSVar2,(String *)"getCcidType:");
  iVar1 = (*ref->getCcidType)(ref);
  (*pSVar2->append)(pSVar2,iVar1);
  local_0 = (*pSVar2->toString)(pSVar2);
  (*CommonUtil_Log)(1,local_0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"isShow4KMenu",-0x6e);
  (*ref->setIsShow4KMenu)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"machver",-0x6e);
  (*ref->setMachver)(ref,iVar1);
  (*ref->setIsShowIcutAuto)(ref,1);
  return ref;
}


 local_0 = new DateModel();
  ref = new JSONObject(p0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"cmd",-0x6e);
  (*local_0->setCmd)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"result",-0x6e);
  (*local_0->setResult)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"ntpSwitch",-0x6e);
  (*local_0->setNtpSwitch)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"dstSwitch",-0x6e);
  (*local_0->setDstSwitch)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"timeZone",-0x6e);
  (*local_0->setTimeZone)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"time",-0x6e);
  (*local_0->setTime)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"timeHour",-0x6e);
  (*local_0->setTimeHour)(local_0,iVar1);
  pSVar2 = (*CommonUtil_jasonPaseString)(ref,(String *)"ntpServer");
  (*local_0->setNtpServer)(local_0,pSVar2);
  return local_0;
}

PKMICModel * com::shix::shixipc::bean::SPKMICModel::jsonToModel(String *p0)

{
  int iVar1;
  SPKMICModel *local_0;
  JSONObject *ref;

  local_0 = new SPKMICModel();
  ref = new JSONObject(p0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"cmd",-0x6e);
  (*local_0->setCmd)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"result",-0x6e);
  (*local_0->setResult)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"outputvol",-0x6e);
  (*local_0->setSpk)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"inputvol",-0x6e);
  (*local_0->setMic)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"batvalue",-0x6e);
  (*local_0->setBatvalue)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"batstatus",-0x6e);
  (*local_0->setBatstatus)(local_0,iVar1);
  return local_0;
}


===

BSCallBack_TYPEMODE -- verkar ha med molnet att göra

  ref_00 = new JSONObject(p2);
  iVar2 = (*ref_00->getInt)(ref_00,(String *)"restrict");
  iVar3 = (*ref_00->getInt)(ref_00,(String *)"type");
  iVar4 = (*ref_00->getInt)(ref_00,(String *)"mode");
  pSVar1 = (*ref_00->getString)(ref_00,pSVar10);
  pSVar5 = (*ref_00->getString)(ref_00,(String *)"cloud_key");
  if ((pSVar5 != (String *)0x0) && (iVar6 = (*pSVar5->length)(pSVar5), 2 < iVar6)) {
    pFVar12 = *this->this$0;
    pFVar7 = (*pFVar12->getActivity)(pFVar12);
    pSVar11 = new StringBuilder();
    (*pSVar11->append)(pSVar11,p1);
    (*pSVar11->append)(pSVar11,(String *)"CLOUDKEY");
    pSVar8 = (*pSVar11->toString)(pSVar11);
    (*CommonUtil_SaveCommonShare)(pFVar7,pSVar8,pSVar5,-1);
  }
  pFVar12 = *this->this$0;
  pFVar7 = (*pFVar12->getActivity)(pFVar12);
  pSVar11 = new StringBuilder();
  (*pSVar11->append)(pSVar11,p1);
  (*pSVar11->append)(pSVar11,pSVar10);
  pSVar5 = (*pSVar11->toString)(pSVar11);
  (*CommonUtil_SaveCommonShare)(pFVar7,pSVar5,pSVar1,0);
  ref_01 = new Bundle();
  pHVar9 = (*FragmentCameraList_access_200)(*this->this$0);
  ref = (*pHVar9->obtainMessage)(pHVar9);
  *ref->what = 3;
  (*ref_01->putInt)(ref_01,(String *)"msgparam",iVar2);
  (*ref_01->putInt)(ref_01,(String *)"msgmode",iVar4);
  (*ref_01->putString)(ref_01,(String *)"strcheckstr",pSVar1);
  (*ref_01->putInt)(ref_01,(String *)"msgtype",iVar3);
  (*ref_01->putString)(ref_01,(String *)"did",p1);
  (*ref->setData)(ref,ref_01);
  pHVar9 = (*FragmentCameraList_access_200)(*this->this$0);
  (*pHVar9->sendMessage)(pHVar9,ref);
  return;

  ---
void com::shix::shixipc::activity::NUIMainActivity::CallBack_AlarmNotify
               (NUIMainActivity *this,String *p1,int p2)

{
  String *pSVar1;
  StringBuilder *local_0;

  local_0 = new StringBuilder();
  (*local_0->append)(local_0,(String *)"callBack_AlarmNotify did:");
  (*local_0->append)(local_0,p1);
  (*local_0->append)(local_0,(String *)" alarmtype:");
  (*local_0->append)(local_0,p2);
  pSVar1 = (*local_0->toString)(local_0);

---

void com::shix::shixipc::activity::NUIMainActivity::CallBack_AlarmNotifyDoorBell
               (NUIMainActivity *this,String *p1,String *p2,String *p3,String *p4)

{
  String *pSVar1;
  StringBuilder *ref;

  ref = new StringBuilder();
  (*ref->append)(ref,(String *)"doorbell:db_did:");
  (*ref->append)(ref,p3);
  (*ref->append)(ref,(String *)"  db_type:");
  (*ref->append)(ref,p4);
  (*ref->append)(ref,(String *)"  db_time:");
  (*ref->append)(ref,p2);

  ---
  void com::shix::shixipc::activity::NUIMainActivity::CallBack_MJTCPTrans
               (NUIMainActivity *this,String *p1,String *p2)

{
  String *pSVar1;
  StringBuilder *local_0;

  local_0 = new StringBuilder();
  (*local_0->append)(local_0,(String *)"CallBack_MJTCPTrans:");
  (*local_0->append)(local_0,p1);
  (*local_0->append)(local_0,(String *)"  strMsg:");
  (*local_0->append)(local_0,p2);
  pSVar1 = (*local_0->toString)(local_0);


  ---
  void com::shix::shixipc::activity::NUIMainActivity::CallBack_PlaybackVideoData
               (NUIMainActivity *this,String *p1,byte *p2,int p3,int p4,int p5,int p6,int p7,int p8,
               int p9,int p10)

{
  String *pSVar1;
  StringBuilder *local_0;
  NUIMainActivity_PlayBackInterface *ref;

  local_0 = new StringBuilder();
  (*local_0->append)(local_0,(String *)"CallBack_PlaybackVideoData  len:");
  (*local_0->append)(local_0,p4);
  (*local_0->append)(local_0,(String *)" width:");
  (*local_0->append)(local_0,p5);
  (*local_0->append)(local_0,(String *)" height:");
  (*local_0->append)(local_0,p6);
  (*local_0->append)(local_0,(String *)"  time:");
  (*local_0->append)(local_0,p7);
  pSVar1 = (*local_0->toString)(local_0);
  (*Log_e)((String *)"zhaogenghuai",pSVar1);
  ref = *NUIMainActivity_playBackInterface;
  if (ref != (NUIMainActivity_PlayBackInterface *)0x0) {
    (*ref->callBackPlaybackVideoData)(ref,p2,p3,p4,p5,p6,p7,p9,p10);
  }

  void com::shix::shixipc::activity::NUIMainActivity::CallBack_TYPEMODE
               (NUIMainActivity *this,String *p1,String *p2)

{
  NUIMainActivity_ConnectStatusInterface1 *local_0;

  local_0 = *NUIMainActivity_connectStatusInterface;
  if (local_0 != (NUIMainActivity_ConnectStatusInterface1 *)0x0) {
    (*local_0->BSCallBack_TYPEMODE)(local_0,p1,p2);
  }
  return;
}



void com::shix::shixipc::ble::BTManager::lambda_handleDiscoveryCallback_0_BTManager
               (BTManager *this,BluetoothDevice *p1,int p2,boolean p3,int p4,String *p5)

{
  boolean bVar1;
  Iterator *ref;
  Object *ref_00;
  List *local_0;

  local_0 = *this->discoveryListeners;
  ref = (*local_0->iterator)(local_0);
  while (bVar1 = (*ref->hasNext)(ref), bVar1 != false) {
    ref_00 = (*ref->next)(ref);
    checkCast(ref_00,DiscoveryListener);
    if (p1 == (BluetoothDevice *)0x0) {
      if (p3) {
        (*ref_00->onDiscoveryStart)(ref_00);
      }
      else if (p4 < 0) {
        (*ref_00->onDiscoveryStop)(ref_00);
      }
      else {
        (*ref_00->onDiscoveryError)(ref_00,p4,p5);
      }
    }
    else {
      (*ref_00->onDeviceFound)(ref_00,p1,p2);
    }
  }
  return;
}

https://gist.github.com/dannysperry/23fee9c11259e599fcbd
https://re-ws.pl/2018/05/security-analysis-of-spy-camera-sold-by-chinese-suppliers-iminicam-app/
https://re-ws.pl/2018/05/pppp-api-what-i-know/
https://github.com/nosoop/pppp_api
https://imgur.com/a/b4qQvEG
https://hacked.camera/cves/#cs2
https://github.com/K-Francis-H/little-stars-hack
https://github.com/DEEFRAG/A9
https://github.com/HoffmannP/A9
https://github.com/datenstau/A9_PPPP <=== BÄST!
https://github.com/dbuezas/ha-addons/tree/main/a9-cam

https://github.com/fbertone/lib32100/wiki
https://github.com/fbertone/32100-dissector/

https://github.com/0xedh/hichip-p2p-firmware-rce <-- exploit som har analyserat vårt protokoll noga!

https://p2pcamwin.software.informer.com/ -- windows program som klarar "alla" p2p-kameror?

https://www.throughtek.com/p2p-iot-connection/ <-- har utvecklad koden verkar det som

https://github.com/AlexxIT/go2rtc#source-exec

open firmware: https://github.com/daniel-dona/beken7252-opencam
java version: https://github.com/aayes89/JCam

https://github.com/intx82/a9-v720
https://www.domoticz.com/forum/viewtopic.php?p=290401#p290401
https://github.com/pmarrapese/iot/tree/master/p2p/dissector
https://community.home-assistant.io/t/popular-a9-mini-wi-fi-camera-the-ha-challenge/230108/105

ThroughTek TUTK Kalay protocol

void com::shix::shixipc::BaseActivity::StartPPPP
               (BaseActivity *this,String *p1,String *p2,String *p3,String *p4)

  pSVar2 = (*p1->substring)(p1,0,3);
  bVar1 = (*pSVar2->equalsIgnoreCase)(pSVar2,(String *)"GBE");
  if (bVar1 == false) {
    bVar1 = (*pSVar2->equalsIgnoreCase)(pSVar2,(String *)"OBJ");
    if (bVar1 == false) {
      pSVar2 = (String *)"EBGAEIBIKHJJGFJJEEHOFAENHLNBHGNMHMFDAADAAOJNKNKG";
    }
    else {
      pSVar2 = (String *)"EBGAEOBOKHJMHMJMENGKFIEEHBMDHNNEGNEBBCCCBII";
    }
  }
  else {
    pSVar2 = (String *)"EBGAEIBIKHJJGFJKEOGIFKEFHCMCHMNBG";
  }
  (*NativeCaller_StartPPPP)(p1,p2,p3,pSVar2);

void com::shix::shixipc::activity::FragmentAlarm::onItemClick
               (FragmentAlarm *this,AdapterView *p1,View *p2,int p3,long p4)

  pSVar3 = (*ref->getDev_Did)(ref);
  iVar4 = (*ref->getResetrict)(ref);
  bVar1 = (*this->checkChina)(this,pSVar3,iVar4);


/* Function: cs2p2p_PPPP_thread_recv_LanSearch */
/* cs2p2p_PPPP_thread_recv_LanSearch(void*) */

void cs2p2p_PPPP_thread_recv_LanSearch(void *param_1)

{
  int *piVar1;
  int __fd;
  int iVar2;
  char cVar3;
  long lVar4;
  uchar local_51b;
  ushort uStack_51a;
  sockaddr_in asStack_518 [16];
  char acStack_508 [1280];
  undefined8 local_8;

  local_8 = *(undefined8 *)PTR___stack_chk_guard_0088c5a0;
  __fd = cs2p2p_setup_listen_port(0x7d6c);

oid cs2p2p_PPPP_Connect_Do
               (char *param_1,int param_2,char *param_3,char param_4,ushort param_5,char *param_6,
               char *param_7)

          cs2p2p_PPPP_Proto_Send_LanSerch
                    (pcVar3,*(int *)(PTR_cs2p2p_gSession_0088a910 + lVar35),0x7d6c);

void cs2p2p_PPPP__DoNetWorkDetect
               (char *param_1,char param_2,st_cs2p2p_NetInfo *param_3,ushort param_4,char *param_5,
               sockaddr_in *param_6,sockaddr_in *param_7,sockaddr_in *param_8)

void __thiscall
CPPPPChannel::ProcessCommand(CPPPPChannel *this,int param_1,char *param_2,int param_3)
... lång lista med kommando-id:n.
  case 0x6001:
    memset(&local_2a10,0,0xfc);
    iVar7 = CCgiPacket::UnpacketStatusParam
                      ((CCgiPacket *)(this + 0x7c0),param_2,(tag_STRU_CAMERA_STATUS *)&local_2a10);
    if (iVar7 != 0) {
      memcpy(auStack_6530,&local_2a10,0xfc);
      ProcessCameraStatusParams(this,(tag_STRU_CAMERA_STATUS)auStack_6530);
    }

undefined8 __thiscall
CCgiPacket::UnpacketPtzParam(CCgiPacket *this,char *param_1,tag_STRU_PTZ_PARAMS *param_2)

{
  SscanfInt(param_1,"ptz_patrol_rate=",(int *)(param_2 + 3));
  SscanfInt(param_1,"ptz_patrol_up_rate=",(int *)(param_2 + 4));
  SscanfInt(param_1,"ptz_patrol_down_rate=",(int *)(param_2 + 5));
  SscanfInt(param_1,"ptz_patrol_left_rate=",(int *)(param_2 + 6));
  SscanfInt(param_1,"ptz_patrol_right_rate=",(int *)(param_2 + 7));
  SscanfInt(param_1,"ptz_center_onstart=",(int *)(param_2 + 1));
  SscanfInt(param_1,"ptz_disppreset=",(int *)(param_2 + 8));
  SscanfInt(param_1,"led_mode=",(int *)param_2);
  SscanfInt(param_1,"preset_onstart=",(int *)(param_2 + 9));
  SscanfInt(param_1,"ptruntimes=",(int *)(param_2 + 2));
  return 1;
}

void __thiscall CPPPPChannel::SendPtzSetting(CPPPPChannel *this,char *param_1,int param_2)

{
  long lVar1;
  undefined8 uVar2;
  char acStack_238 [512];
  long local_38;

  lVar1 = tpidr_el0;
  local_38 = *(long *)(lVar1 + 0x28);
  uVar2 = 0xffffffff;
  if ((param_1 != (char *)0x0) && (param_2 == 0x28)) {
    memset(acStack_238,0,0x200);
    sprintf(acStack_238,
            "set_misc.cgi?led_mode=%d&ptz_center_onstart=%d&ptz_run_times=%d&ptz_patrol_rate=%d&ptz_patrol_up_rate=%d&ptz_patrol_down_rate=%d&ptz_patrol_left_rate=%d&ptz_patrol_right_rate=%d&ptz_dispreset=%d&ptz_preset=%d&"
            ,(ulong)*(uint *)param_1,(ulong)*(uint *)(param_1 + 4),(ulong)*(uint *)(param_1 + 8),
            (ulong)*(uint *)(param_1 + 0xc),(ulong)*(uint *)(param_1 + 0x10),
            (ulong)*(uint *)(param_1 + 0x14),*(undefined4 *)(param_1 + 0x18));
    uVar2 = cgi_get_common(this,acStack_238);
  }
  if (*(long *)(lVar1 + 0x28) == local_38) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail(uVar2);
}

void __thiscall CPPPPChannel::cgi_livestream(CPPPPChannel *this,int param_1,int param_2)

void cs2p2p_PPPP_Proto_Send_P2PRdy
               (char *param_1,int param_2,sockaddr_in *param_3,char *param_4,uint param_5,
               char *param_6)

{
  undefined *puVar1;
  st_cs2p2p_SessionHeader asStack_108 [4];
  st_cs2p2p_P2PRdy asStack_104 [252];
  long local_8;

  puVar1 = PTR___stack_chk_guard_0088c5a0;
  local_8 = *(long *)PTR___stack_chk_guard_0088c5a0;
  cs2p2p_PPPP_Proto_Write_Header(asStack_108,'B',0x14);
  cs2p2p_PPPP_Proto_Write_P2PRdy(asStack_104,param_4,param_5,param_6);
  cs2p2p_SendMessage(param_1,(char *)asStack_108,0x18,param_2,param_3);
  if (local_8 == *(long *)puVar1) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}

/* Function: cs2p2p_PPPP_Proto_Write_Header */
/* cs2p2p_PPPP_Proto_Write_Header(st_cs2p2p_SessionHeader*, unsigned char, unsigned short) */

void cs2p2p_PPPP_Proto_Write_Header(st_cs2p2p_SessionHeader *param_1,uchar param_2,ushort param_3)

{
  *param_1 = (st_cs2p2p_SessionHeader)0xf1;
  *(ushort *)(param_1 + 2) = param_3 >> 8 | (ushort)(((ulong)param_3 & 0xff00ff00ff00ff) << 8);
  param_1[1] = (st_cs2p2p_SessionHeader)param_2;
  return;
}

/* Function: cs2p2p_SendMessage */
/* cs2p2p_SendMessage(char const*, char*, int, int, sockaddr_in*) */

void cs2p2p_SendMessage(char *param_1,char *param_2,int param_3,int param_4,sockaddr_in *param_5)

{
  char cVar1;
  size_t __n;
  sockaddr asStack_5c8 [2];
  uchar auStack_5a8 [1440];
  long local_8;

  __n = (size_t)param_3;
  local_8 = *(long *)PTR___stack_chk_guard_0088c5a0;
  memset(auStack_5a8,0,0x5a0);
  if ((param_1 == (char *)0x0) || (*param_1 == '\0')) {
    memcpy(auStack_5a8,param_2,__n);
    cVar1 = *PTR_cs2p2p_gbUseIPv6_0088ae48;
  }
  else {
    cs2p2p__P2P_Proprietary_Encrypt(param_1,(uchar *)param_2,auStack_5a8,(ushort)param_3);
    cVar1 = *PTR_cs2p2p_gbUseIPv6_0088ae48;
  }
  if (cVar1 == '\x01') {
    cs2p2p_SockAddr_4to6(param_5,(sockaddr_in6 *)asStack_5c8);
    sendto(param_4,auStack_5a8,__n,0,asStack_5c8,0x1c);
  }
  else {
    *(undefined2 *)param_5 = 2;
    sendto(param_4,auStack_5a8,__n,0,(sockaddr *)param_5,0x10);
  }
  if (local_8 != *(long *)PTR___stack_chk_guard_0088c5a0) {
                    /* WARNING: Subroutine does not return */
    __stack_chk_fail();
  }
  return;
}
====

    sprintf(acStack_858,"GET /%sloginuse=%s&loginpas=%s&user=%s&pwd=%s&",param_1,pCVar2,pCVar3,
            pCVar2,pCVar3);

      iVar5 = CCircleBuf::Write(this_00,puVar7,iVar5 + 0x18);

undefined8 __thiscall CPPPPChannel::StopAudio(CPPPPChannel *this)

{
  long lVar1;
  char *pcVar2;
  char acStack_138 [256];
  long local_38;

  lVar1 = tpidr_el0;
  local_38 = *(long *)(lVar1 + 0x28);
  if (*(int *)(this + 0xdc) == 1) {
    if (*(int *)(this + 0x794) == 0) goto LAB_001fe058;
    pcVar2 = "audiostream.cgi?streamid=16&";
  }
  else {
    if (*(int *)(this + 0x794) == 0) goto LAB_001fe058;
    memset(acStack_138,0,0x100);
    sprintf(acStack_138,
            "{\"pro\":\"stream\",\"cmd\":111,\"audio\":0,\"user\":\"%s\",\"pwd\":\"%s\"}",this + 300
            ,this + 0x16c);
    pcVar2 = acStack_138;
  }
  cgi_get_common(this,pcVar2);

TVÅ OLIKA METODER!!!

  if (*(int *)(this + 0xdc) == 1) {
    if (*(int *)(this + 0x794) == 0) goto LAB_001fe058;
    pcVar2 = "audiostream.cgi?streamid=16&";
  }
  else {
    if (*(int *)(this + 0x794) == 0) goto LAB_001fe058;
    memset(acStack_138,0,0x100);
    sprintf(acStack_138,
            "{\"pro\":\"stream\",\"cmd\":111,\"audio\":0,\"user\":\"%s\",\"pwd\":\"%s\"}",this + 300
            ,this + 0x16c);
    pcVar2 = acStack_138;
  }

    sprintf(acStack_b8,"decoder_control.cgi?command=%d&onestep=1&",(ulong)(uint)param_1);
  cgi_get_common(this,acStack_b8);



/* Function: Java_object_p2pipcam_nativecaller_NativeCaller_PPPPSetCallbackContext */
undefined8
Java_object_p2pipcam_nativecaller_NativeCaller_PPPPSetCallbackContext
          (long *param_1,undefined8 param_2,long param_3)

{
  undefined8 uVar1;
  undefined8 uVar2;

  if (param_3 == 0) {
    *(undefined8 *)PTR_g_CallBackObj_0088a1c8 = 0;
    *(undefined8 *)PTR_g_CallBack_SetSystemParamsResult_0088a7d8 = 0;
    *(undefined8 *)PTR_g_CallBack_CameraParams_0088d0e8 = 0;
    *(undefined8 *)PTR_g_CallBack_WifiParams_0088d050 = 0;
    *(undefined8 *)PTR_g_CallBack_UserParams_0088c798 = 0;
    *(undefined8 *)PTR_g_CallBack_FtpParams_0088a748 = 0;
    *(undefined8 *)PTR_g_CallBack_DDNSParams_0088b7f0 = 0;
    *(undefined8 *)PTR_g_CallBack_MailParams_0088cd68 = 0;
    *(undefined8 *)PTR_g_CallBack_DatetimeParams_0088a4c0 = 0;
    *(undefined8 *)PTR_g_CallBack_NetworkParams_0088cd28 = 0;
    *(undefined8 *)PTR_g_CallBack_CameraStatusParams_0088a298 = 0;
    *(undefined8 *)PTR_g_CallBack_PTZParams_0088c8c8 = 0;
    *(undefined8 *)PTR_g_CallBack_WifiScanResult_0088c890 = 0;
    *(undefined8 *)PTR_g_CallBack_AlarmParams_0088c870 = 0;
    *(undefined8 *)PTR_g_CallBack_AlarmNotify_0088acb0 = 0;
    *(undefined8 *)PTR_g_CallBack_RecordFileList_0088cd90 = 0;
    *(undefined8 *)PTR_g_CallBack_PlaybackVideoData_0088b010 = 0;
    *(undefined8 *)PTR_g_CallBack_H264Data_0088b830 = 0;
    *(undefined8 *)PTR_g_CallBack_RecordSchParams_0088db28 = 0;
    *(undefined8 *)PTR_g_CallBack_SearchResult_0088db60 = 0;
    *(undefined8 *)PTR_g_CallBack_PPPPMsgNotify_0088b4b8 = 0;
    *(undefined8 *)PTR_g_CallBack_MessageNotify_0088d098 = 0;
    *(undefined8 *)PTR_g_CallBack_VideoData_0088a640 = 0;
    *(undefined8 *)PTR_g_CallBack_AudioData_0088ca28 = 0;
    *(undefined8 *)PTR_g_CallBack_APPVersionCallBack_0088b5e8 = 0;
    *(undefined8 *)PTR_g_CallBack_TransferMessage_0088bc28 = 0;
    *(undefined8 *)PTR_g_CallBack_SendMusicProcess_0088d538 = 0;
    *(undefined8 *)PTR_g_CallBack_CheckHandle_0088cce0 = 0;
    *(undefined8 *)PTR_g_CallBack_ConnectLookCallBack_0088dfc8 = 0;
    *(undefined8 *)PTR_g_CallBack_TYPEMODE_0088ccb8 = 0;
    *(undefined8 *)PTR_g_msgfield_0088a998 = 0;
    *(undefined8 *)PTR_g_CallBack_PlayBackAudioAACTrans_0088bb60 = 0;
    *(undefined8 *)PTR_g_CallBack_PlayBackAudioPCMTrans_0088af48 = 0;
    *(undefined8 *)PTR_g_CallBack_MJTCPTrans_0088b258 = 0;
    *(undefined8 *)PTR_g_CallBack_VideoTrans_H264H265_0088c058 = 0;
    *(undefined8 *)PTR_g_CallBack_DownLoad_0088c018 = 0;
  }
  else {
    uVar1 = (**(code **)(*param_1 + 0xa8))(param_1,param_3);
    *(undefined8 *)PTR_g_CallBackObj_0088a1c8 = uVar1;
    uVar1 = (**(code **)(*param_1 + 0xf8))(param_1,param_3);
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"MessageNotifyDNS",&DAT_0060a2f1);
    *(undefined8 *)PTR_g_msgfield_0088a998 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_TYPEMODE","(Ljava/lang/String;Ljava/lang/String;)V");
    *(undefined8 *)PTR_g_CallBack_TYPEMODE_0088ccb8 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_Snapshot","(Ljava/lang/String;[BI)V");
    *(undefined8 *)PTR_g_CallBack_Snapshot_00889e88 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_AlarmNotify",
                       "(Ljava/lang/String;Ljava/lang/String;)V");
    *(undefined8 *)PTR_g_CallBack_AlarmNotify_0088acb0 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_PlaybackVideoData","(Ljava/lang/String;[BIIIIIIII)V")
    ;
    *(undefined8 *)PTR_g_CallBack_PlaybackVideoData_0088b010 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"PPPPMsgNotify","(Ljava/lang/String;II)V")
    ;
    *(undefined8 *)PTR_g_CallBack_PPPPMsgNotify_0088b4b8 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_H264Data","(Ljava/lang/String;[BIII)V");
    *(undefined8 *)PTR_g_CallBack_H264Data_0088b830 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"SearchResult",
                       "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V"
                      );
    *(undefined8 *)PTR_g_CallBack_SearchResult_0088db60 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"MessageNotify","(Ljava/lang/String;II)V")
    ;
    *(undefined8 *)PTR_g_CallBack_MessageNotify_0088d098 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"VideoData","(Ljava/lang/String;[BIIIIII)V");
    *(undefined8 *)PTR_g_CallBack_VideoData_0088a640 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"AudioData","([BI)V");
    *(undefined8 *)PTR_g_CallBack_AudioData_0088ca28 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBackTransferMessage",
                       "(Ljava/lang/String;Ljava/lang/String;I)V");
    *(undefined8 *)PTR_g_CallBack_TransferMessage_0088bc28 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_Checkhandle",
                       "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V"
                      );
    *(undefined8 *)PTR_g_CallBack_CheckHandle_0088cce0 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_VideoTrans_H264H265","(Ljava/lang/String;[BIII)V");
    *(undefined8 *)PTR_g_CallBack_VideoTrans_H264H265_0088c058 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"AudioDataPlayBack","([BI)V");
    *(undefined8 *)PTR_g_CallBack_PlayBackAudioAACTrans_0088bb60 = uVar2;
    uVar2 = (**(code **)(*param_1 + 0x108))(param_1,uVar1,"AudioPCMDataPlayBack","([BII)V");
    *(undefined8 *)PTR_g_CallBack_PlayBackAudioPCMTrans_0088af48 = uVar2;
    uVar1 = (**(code **)(*param_1 + 0x108))
                      (param_1,uVar1,"CallBack_MJTCPTrans","(Ljava/lang/String;Ljava/lang/String;)V"
                      );
    *(undefined8 *)PTR_g_CallBack_MJTCPTrans_0088b258 = uVar1;
  }
  return 1;
}




cgi_get_common1 ==> GET / etc
cgi_get_common ==> proc: name, ... style -- nej, inte sant, kan också vara e.g.
decoder_control.cgi?command=%d&onestep=1&

  pSVar2 = (*CommonUtil_CameraControl)
                     (*SystemValue_doorBellAdmin,*SystemValue_doorBellPass,(String *)"lamp",0);
  iVar2 = (*p1->getProgress)(p1);
  pSVar3 = (*CommonUtil_CameraControl)(pSVar3,pSVar4,(String *)"bright",iVar2);
  pSVar3 = (*CommonUtil_CameraControl)(pSVar3,pSVar4,(String *)"contrast",iVar2);


CameraParmsModel * com::shix::shixipc::bean::CameraParmsModel::jsonToModel(String *p0)

{
  int iVar1;
  String *local_0;
  CameraParmsModel *ref;
  JSONObject *ref_00;
  StringBuilder *pSVar2;

  local_0 = (String *)"lamp";
  ref = new CameraParmsModel();
  ref_00 = new JSONObject(p0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"cmd",-0x6e);
  (*ref->setCmd)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"result",-0x6e);
  (*ref->setResult)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"bright",-0x6e);
  (*ref->setBright)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"contrast",-0x6e);
  (*ref->setContrast)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"icut",-0x6e);
  (*ref->setIcut)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"rotmir",-0x6e);
  (*ref->setRotmir)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"clockScreen",-0x6e);
  (*ref->setClockScreen)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"pirstatu",-0x6e);
  (*ref->setPirstatu)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"mic",-0x6e);
  (*ref->setMic)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"spk",-0x6e);
  (*ref->setSpk)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,local_0,-0x6e);
  (*ref->setLamp)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,local_0,-0x6e);
  (*ref->setLamp)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"signal",-0x6e);
  (*ref->setSignal)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"batValue",-0x6e);
  (*ref->setBatvalue)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"batStatus",-0x6e);
  (*ref->setBatstatus)(ref,iVar1);
  local_0 = (*CommonUtil_jasonPaseString)(ref_00,(String *)"qccid");
  (*ref->setQccid)(ref,local_0);
  pSVar2 = new StringBuilder();
  (*pSVar2->append)(pSVar2,(String *)"setQccid:");
  local_0 = (*ref->getQccid)(ref);
  (*pSVar2->append)(pSVar2,local_0);
  local_0 = (*pSVar2->toString)(pSVar2);
  (*CommonUtil_Log)(1,local_0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"ccidType",1);
  (*ref->setCcidType)(ref,iVar1);
  pSVar2 = new StringBuilder();
  (*pSVar2->append)(pSVar2,(String *)"getCcidType:");
  iVar1 = (*ref->getCcidType)(ref);
  (*pSVar2->append)(pSVar2,iVar1);
  local_0 = (*pSVar2->toString)(pSVar2);
  (*CommonUtil_Log)(1,local_0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"isShow4KMenu",-0x6e);
  (*ref->setIsShow4KMenu)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"machver",-0x6e);
  (*ref->setMachver)(ref,iVar1);
  (*ref->setIsShowIcutAuto)(ref,1);
  return ref;
}


     "{\"pro\":\"stream\",\"cmd\":111,\"audio\":1,\"user\":\"%s\",\"pwd\":\"%s\"}",this + 300


Boolean * com::shix::shixipc::utils::CommonUtil::SHIX_isSupportPrefix(String *p0)

{
  boolean bVar1;
  Boolean *pBVar2;
  String *pSVar3;

  bVar1 = (*p0->startsWith)(p0,(String *)"DGK");
  if ((bVar1 == false) && (bVar1 = (*p0->startsWith)(p0,(String *)"IKB"), bVar1 == false)) {
    pSVar3 = (String *)"EEE";
    bVar1 = (*p0->startsWith)(p0,pSVar3);
    if (((bVar1 == false) &&
        (((bVar1 = (*p0->startsWith)(p0,(String *)"XIAODOU"), bVar1 == false &&
          (bVar1 = (*p0->startsWith)(p0,(String *)"OEMAAA"), bVar1 == false)) &&
         (bVar1 = (*p0->startsWith)(p0,(String *)"DBG"), bVar1 == false)))) &&
       (((bVar1 = (*p0->startsWith)(p0,(String *)"DGO"), bVar1 == false &&
         (bVar1 = (*p0->startsWith)(p0,(String *)"DGB"), bVar1 == false)) &&
        (bVar1 = (*p0->startsWith)(p0,pSVar3), bVar1 == false)))) {
      pBVar2 = (*Boolean_valueOf)(false);
      return pBVar2;
    }
  }
  pBVar2 = (*Boolean_valueOf)(true);
  return pBVar2;
}

Jag tror att anledningen till att jag inte kan skicka meddelanden ligger i void CPPPPChannel::TransferMessage(char *param_1,int param_2)


1233847,5:   (*NDNCameraLiveActivity_access_800)(*this->this$0,0,0);
...
1234791,7:     (*NDNCameraLiveActivity_access_800)(*this->this$0,0,7);

0 = 2 long
1 = 3 touch

2 = 4 long
3 = 5 touch

4 = 6 long
5 = 7 touch

6 = 8 long
7 = 9 touch

från 9 touch:


  bVar1 = (*NDNCameraLiveActivity_access_700)(*this->this$0);
  if (bVar1) {
    (*NDNCameraLiveActivity_access_702)(*this->this$0,false); // p0->isSendPtzCotr
    (*NDNCameraLiveActivity_access_800)(*this->this$0,0,7);
  }

från 8 long:
  (*NDNCameraLiveActivity_access_702)(*this->this$0,true);
  (*NDNCameraLiveActivity_access_800)(*this->this$0,0,6);


  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_alarm");
  (*local_0->put)(local_0,(String *)"cmd",0x6c);
  (*local_0->put)(local_0,(String *)"user",*SystemValue_doorBellAdmin);
  (*local_0->put)(local_0,(String *)"pwd",*SystemValue_doorBellPass);
  (*local_0->put)(local_0,(String *)"pirenable",1);
  (*local_0->put)(local_0,(String *)"pirvideo",1);
  (*local_0->put)(local_0,(String *)"pirDelayTime",0xb4);
  (*local_0->put)(local_0,(String *)"pirCloudUpCount",2000);

String * com::shix::shixipc::utils::CommonUtil::startTalk(String *p0,String *p1,int p2)

{
  String *pSVar1;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"talk_send");
  (*local_0->put)(local_0,(String *)"cmd",300);
  (*local_0->put)(local_0,(String *)"user",p0);
  (*local_0->put)(local_0,(String *)"pwd",p1);
  (*local_0->put)(local_0,(String *)"isSend",p2);
  pSVar1 = (*local_0->toString)(local_0);
  return pSVar1;
}

PTR_TalkThread_0088d928

             cVar4 = AEncode(auStack_6b0,0x280,auStack_1ac,&local_6bc);
              puVar1 = &UNK_0060b196;
              if (cVar4 != '\0') {
                puVar1 = &DAT_0060b192;
              }
              __android_log_print(3,"SHIX-jni","SHIXDEV----send g711a --pcm outLen:%d isOK:%s",
                                  local_6bc,puVar1);
              pvVar7 = (void *)SendTalk(this,(char *)auStack_1ac,local_6bc);

              eller
                          CAdpcm::ADPCMEncode(*(CAdpcm **)(this + 0x7a8),auStack_6b0,0x500,auStack_1ac);
            pvVar7 = (void *)SendTalk(this,(char *)auStack_1ac,0x140);

==> PPCS_Write

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_alarm");
  (*local_0->put)(local_0,(String *)"cmd",0x6c);
  (*local_0->put)(local_0,(String *)"user",p1);
  (*local_0->put)(local_0,(String *)"pwd",p2);
  iVar1 = (*p0->getEnable)(p0);
  (*local_0->put)(local_0,(String *)"enable",iVar1);
  iVar1 = (*p0->getLevel)(p0);
  (*local_0->put)(local_0,(String *)"level",iVar1);
  iVar1 = (*p0->getAudio_out)(p0);
  (*local_0->put)(local_0,(String *)"audio_out",iVar1);
  iVar1 = (*p0->getRecord)(p0);
  (*local_0->put)(local_0,(String *)"record",iVar1);
  iVar1 = (*p0->getMsg_push)(p0);
  (*local_0->put)(local_0,(String *)"msg_push",iVar1);
  iVar1 = (*p0->getStart_min)(p0);
  (*local_0->put)(local_0,(String *)"start_min",iVar1);
  iVar1 = (*p0->getStop_min)(p0);
  (*local_0->put)(local_0,(String *)"stop_min",iVar1);
  iVar1 = (*p0->getStart_hour)(p0);
  (*local_0->put)(local_0,(String *)"start_hour",iVar1);
  iVar1 = (*p0->getStop_hour)(p0);
  (*local_0->put)(local_0,(String *)"stop_hour",iVar1);
  pSVar2 = (*local_0->toString)(local_0);
  return pSVar2;
}



String * com::shix::shixipc::bean::AlarmModel::toJson(AlarmModel *p0,String *p1,String *p2)

{
  int iVar1;
  String *pSVar2;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_alarm");
  (*local_0->put)(local_0,(String *)"cmd",0x6c);
  (*local_0->put)(local_0,(String *)"user",p1);
  (*local_0->put)(local_0,(String *)"pwd",p2);
  iVar1 = (*p0->getPirenable)(p0);
  (*local_0->put)(local_0,(String *)"pirenable",iVar1);
  iVar1 = (*p0->getPirsensitive)(p0);
  (*local_0->put)(local_0,(String *)"pirsensitive",iVar1);
  iVar1 = (*p0->getPirvideo)(p0);
  (*local_0->put)(local_0,(String *)"pirvideo",iVar1);
  iVar1 = (*p0->getPirvideotime)(p0);
  (*local_0->put)(local_0,(String *)"pirvideotime",iVar1);
  iVar1 = (*p0->getPirdelaytime)(p0);
  (*local_0->put)(local_0,(String *)"pirDelayTime",iVar1);
  iVar1 = (*p0->getPirPush)(p0);
  (*local_0->put)(local_0,(String *)"pirPush",iVar1);
  (*local_0->put)(local_0,(String *)"AalarmInterval",2);
  (*local_0->put)(local_0,(String *)"pirCloudUpCount",0x32);
  pSVar2 = (*local_0->toString)(local_0);
  return pSVar2;
}



String * com::shix::shixipc::utils::CommonUtil::SHIX_SetDateParms
                   (String *p0,String *p1,int p2,int p3)

{
  String *pSVar1;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_datetime");
  (*local_0->put)(local_0,(String *)"cmd",0x7e);
  (*local_0->put)(local_0,(String *)"user",p0);
  (*local_0->put)(local_0,(String *)"pwd",p1);
  (*local_0->put)(local_0,(String *)"tz_offset_min",p2);
  (*local_0->put)(local_0,(String *)"utc_date_time",p3);
  pSVar1 = (*local_0->toString)(local_0);
  return pSVar1;
}


String * com::shix::shixipc::utils::CommonUtil::SHIX_setMIC(String *p0,String *p1,int p2)

{
  String *pSVar1;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_vol");
  (*local_0->put)(local_0,(String *)"cmd",0x87);
  (*local_0->put)(local_0,(String *)"user",p0);
  (*local_0->put)(local_0,(String *)"pwd",p1);
  (*local_0->put)(local_0,(String *)"inputvol",p2);
  pSVar1 = (*local_0->toString)(local_0);
  return pSVar1;
}

String * com::shix::shixipc::utils::CommonUtil::SHIX_setSPK(String *p0,String *p1,int p2)

{
  String *pSVar1;
  JSONObject *local_0;

  local_0 = new JSONObject();
  (*local_0->put)(local_0,(String *)"pro",(Object *)"set_vol");
  (*local_0->put)(local_0,(String *)"cmd",0x87);
  (*local_0->put)(local_0,(String *)"user",p0);
  (*local_0->put)(local_0,(String *)"pwd",p1);
  (*local_0->put)(local_0,(String *)"outputvol",p2);
  pSVar1 = (*local_0->toString)(local_0);
  return pSVar1;
}


button 12:
toggle to off:
  pSVar2 = (*CommonUtil_CameraControl)
                     (*SystemValue_doorBellAdmin,*SystemValue_doorBellPass,(String *)"clockScreen",0
                     );

on:
"clockScreen",1


  pSVar3 = (*CommonUtil_SHIX_setSPK)(pSVar3,pSVar4,iVar2);
  borde vara mellan 0 och 100

$26 är IR..?


icut3 och icut4, vad är skillnaden?

access_5000 signalstyrka? ivSingn

access_5400  im_zsd

popupWindow_Icut

access_3000 tv_info text view

access_5500 tv_zsd text view.

access_1800 sv_szp switch view
sv_szd

access_5202 mirror

access_1500 strDID

access_2500 strName

access_800 contrDevDee


9002 borde också funka! get_cloudinfo...
406 -- check_ota ?



 iVar1 = (*p2->indexOf)(p2,(String *)"9002");
  if (0 < iVar1) {
    pJVar3 = new JSONObject(p2);
    iVar1 = (*CommonUtil_jasonPaseInt)(pJVar3,pSVar5,-0x6e);
    if (iVar1 == 0x232a) {
      pSVar6 = (*CommonUtil_jasonPaseString)(pJVar3,(String *)"creatTime");
      *this->creatTime = pSVar6;
      iVar1 = (*CommonUtil_jasonPaseInt)(pJVar3,(String *)"days",-0x6e);
      *this->days = iVar1;
      pHVar4 = *this->mHandler;
      (*pHVar4->sendEmptyMessage)(pHVar4,0x19);
    }
  }



  local_0 = (String *)"lamp";
  ref = new CameraParmsModel();
  ref_00 = new JSONObject(p0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"cmd",-0x6e);
  (*ref->setCmd)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"result",-0x6e);
  (*ref->setResult)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"bright",-0x6e);
  (*ref->setBright)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"contrast",-0x6e);
  (*ref->setContrast)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"icut",-0x6e);
  (*ref->setIcut)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"rotmir",-0x6e);
  (*ref->setRotmir)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"clockScreen",-0x6e);
  (*ref->setClockScreen)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"pirstatu",-0x6e);
  (*ref->setPirstatu)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"mic",-0x6e);
  (*ref->setMic)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"spk",-0x6e);
  (*ref->setSpk)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,local_0,-0x6e);
  (*ref->setLamp)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,local_0,-0x6e);
  (*ref->setLamp)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"signal",-0x6e);
  (*ref->setSignal)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"batValue",-0x6e);
  (*ref->setBatvalue)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"batStatus",-0x6e);
  (*ref->setBatstatus)(ref,iVar1);
  local_0 = (*CommonUtil_jasonPaseString)(ref_00,(String *)"qccid");
  (*ref->setQccid)(ref,local_0);
  pSVar2 = new StringBuilder();
  (*pSVar2->append)(pSVar2,(String *)"setQccid:");
  local_0 = (*ref->getQccid)(ref);
  (*pSVar2->append)(pSVar2,local_0);
  local_0 = (*pSVar2->toString)(pSVar2);
  (*CommonUtil_Log)(1,local_0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"ccidType",1);
  (*ref->setCcidType)(ref,iVar1);
  pSVar2 = new StringBuilder();
  (*pSVar2->append)(pSVar2,(String *)"getCcidType:");
  iVar1 = (*ref->getCcidType)(ref);
  (*pSVar2->append)(pSVar2,iVar1);
  local_0 = (*pSVar2->toString)(pSVar2);
  (*CommonUtil_Log)(1,local_0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"isShow4KMenu",-0x6e);
  (*ref->setIsShow4KMenu)(ref,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref_00,(String *)"machver",-0x6e);
  (*ref->setMachver)(ref,iVar1);
  (*ref->setIsShowIcutAuto)(ref,1);
  return ref;
}


 local_0 = new DateModel();
  ref = new JSONObject(p0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"cmd",-0x6e);
  (*local_0->setCmd)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"result",-0x6e);
  (*local_0->setResult)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"ntpSwitch",-0x6e);
  (*local_0->setNtpSwitch)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"dstSwitch",-0x6e);
  (*local_0->setDstSwitch)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"timeZone",-0x6e);
  (*local_0->setTimeZone)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"time",-0x6e);
  (*local_0->setTime)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"timeHour",-0x6e);
  (*local_0->setTimeHour)(local_0,iVar1);
  pSVar2 = (*CommonUtil_jasonPaseString)(ref,(String *)"ntpServer");
  (*local_0->setNtpServer)(local_0,pSVar2);
  return local_0;
}

PKMICModel * com::shix::shixipc::bean::SPKMICModel::jsonToModel(String *p0)

{
  int iVar1;
  SPKMICModel *local_0;
  JSONObject *ref;

  local_0 = new SPKMICModel();
  ref = new JSONObject(p0);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"cmd",-0x6e);
  (*local_0->setCmd)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"result",-0x6e);
  (*local_0->setResult)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"outputvol",-0x6e);
  (*local_0->setSpk)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"inputvol",-0x6e);
  (*local_0->setMic)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"batvalue",-0x6e);
  (*local_0->setBatvalue)(local_0,iVar1);
  iVar1 = (*CommonUtil_jasonPaseInt)(ref,(String *)"batstatus",-0x6e);
  (*local_0->setBatstatus)(local_0,iVar1);
  return local_0;
}


===

BSCallBack_TYPEMODE -- verkar ha med molnet att göra

  ref_00 = new JSONObject(p2);
  iVar2 = (*ref_00->getInt)(ref_00,(String *)"restrict");
  iVar3 = (*ref_00->getInt)(ref_00,(String *)"type");
  iVar4 = (*ref_00->getInt)(ref_00,(String *)"mode");
  pSVar1 = (*ref_00->getString)(ref_00,pSVar10);
  pSVar5 = (*ref_00->getString)(ref_00,(String *)"cloud_key");
  if ((pSVar5 != (String *)0x0) && (iVar6 = (*pSVar5->length)(pSVar5), 2 < iVar6)) {
    pFVar12 = *this->this$0;
    pFVar7 = (*pFVar12->getActivity)(pFVar12);
    pSVar11 = new StringBuilder();
    (*pSVar11->append)(pSVar11,p1);
    (*pSVar11->append)(pSVar11,(String *)"CLOUDKEY");
    pSVar8 = (*pSVar11->toString)(pSVar11);
    (*CommonUtil_SaveCommonShare)(pFVar7,pSVar8,pSVar5,-1);
  }
  pFVar12 = *this->this$0;
  pFVar7 = (*pFVar12->getActivity)(pFVar12);
  pSVar11 = new StringBuilder();
  (*pSVar11->append)(pSVar11,p1);
  (*pSVar11->append)(pSVar11,pSVar10);
  pSVar5 = (*pSVar11->toString)(pSVar11);
  (*CommonUtil_SaveCommonShare)(pFVar7,pSVar5,pSVar1,0);
  ref_01 = new Bundle();
  pHVar9 = (*FragmentCameraList_access_200)(*this->this$0);
  ref = (*pHVar9->obtainMessage)(pHVar9);
  *ref->what = 3;
  (*ref_01->putInt)(ref_01,(String *)"msgparam",iVar2);
  (*ref_01->putInt)(ref_01,(String *)"msgmode",iVar4);
  (*ref_01->putString)(ref_01,(String *)"strcheckstr",pSVar1);
  (*ref_01->putInt)(ref_01,(String *)"msgtype",iVar3);
  (*ref_01->putString)(ref_01,(String *)"did",p1);
  (*ref->setData)(ref,ref_01);
  pHVar9 = (*FragmentCameraList_access_200)(*this->this$0);
  (*pHVar9->sendMessage)(pHVar9,ref);
  return;

  ---
void com::shix::shixipc::activity::NUIMainActivity::CallBack_AlarmNotify
               (NUIMainActivity *this,String *p1,int p2)

{
  String *pSVar1;
  StringBuilder *local_0;

  local_0 = new StringBuilder();
  (*local_0->append)(local_0,(String *)"callBack_AlarmNotify did:");
  (*local_0->append)(local_0,p1);
  (*local_0->append)(local_0,(String *)" alarmtype:");
  (*local_0->append)(local_0,p2);
  pSVar1 = (*local_0->toString)(local_0);

---

void com::shix::shixipc::activity::NUIMainActivity::CallBack_AlarmNotifyDoorBell
               (NUIMainActivity *this,String *p1,String *p2,String *p3,String *p4)

{
  String *pSVar1;
  StringBuilder *ref;

  ref = new StringBuilder();
  (*ref->append)(ref,(String *)"doorbell:db_did:");
  (*ref->append)(ref,p3);
  (*ref->append)(ref,(String *)"  db_type:");
  (*ref->append)(ref,p4);
  (*ref->append)(ref,(String *)"  db_time:");
  (*ref->append)(ref,p2);

  ---
  void com::shix::shixipc::activity::NUIMainActivity::CallBack_MJTCPTrans
               (NUIMainActivity *this,String *p1,String *p2)

{
  String *pSVar1;
  StringBuilder *local_0;

  local_0 = new StringBuilder();
  (*local_0->append)(local_0,(String *)"CallBack_MJTCPTrans:");
  (*local_0->append)(local_0,p1);
  (*local_0->append)(local_0,(String *)"  strMsg:");
  (*local_0->append)(local_0,p2);
  pSVar1 = (*local_0->toString)(local_0);


  ---
  void com::shix::shixipc::activity::NUIMainActivity::CallBack_PlaybackVideoData
               (NUIMainActivity *this,String *p1,byte *p2,int p3,int p4,int p5,int p6,int p7,int p8,
               int p9,int p10)

{
  String *pSVar1;
  StringBuilder *local_0;
  NUIMainActivity_PlayBackInterface *ref;

  local_0 = new StringBuilder();
  (*local_0->append)(local_0,(String *)"CallBack_PlaybackVideoData  len:");
  (*local_0->append)(local_0,p4);
  (*local_0->append)(local_0,(String *)" width:");
  (*local_0->append)(local_0,p5);
  (*local_0->append)(local_0,(String *)" height:");
  (*local_0->append)(local_0,p6);
  (*local_0->append)(local_0,(String *)"  time:");
  (*local_0->append)(local_0,p7);
  pSVar1 = (*local_0->toString)(local_0);
  (*Log_e)((String *)"zhaogenghuai",pSVar1);
  ref = *NUIMainActivity_playBackInterface;
  if (ref != (NUIMainActivity_PlayBackInterface *)0x0) {
    (*ref->callBackPlaybackVideoData)(ref,p2,p3,p4,p5,p6,p7,p9,p10);
  }

  void com::shix::shixipc::activity::NUIMainActivity::CallBack_TYPEMODE
               (NUIMainActivity *this,String *p1,String *p2)

{
  NUIMainActivity_ConnectStatusInterface1 *local_0;

  local_0 = *NUIMainActivity_connectStatusInterface;
  if (local_0 != (NUIMainActivity_ConnectStatusInterface1 *)0x0) {
    (*local_0->BSCallBack_TYPEMODE)(local_0,p1,p2);
  }
  return;
}



void com::shix::shixipc::ble::BTManager::lambda_handleDiscoveryCallback_0_BTManager
               (BTManager *this,BluetoothDevice *p1,int p2,boolean p3,int p4,String *p5)

{
  boolean bVar1;
  Iterator *ref;
  Object *ref_00;
  List *local_0;

  local_0 = *this->discoveryListeners;
  ref = (*local_0->iterator)(local_0);
  while (bVar1 = (*ref->hasNext)(ref), bVar1 != false) {
    ref_00 = (*ref->next)(ref);
    checkCast(ref_00,DiscoveryListener);
    if (p1 == (BluetoothDevice *)0x0) {
      if (p3) {
        (*ref_00->onDiscoveryStart)(ref_00);
      }
      else if (p4 < 0) {
        (*ref_00->onDiscoveryStop)(ref_00);
      }
      else {
        (*ref_00->onDiscoveryError)(ref_00,p4,p5);
      }
    }
    else {
      (*ref_00->onDeviceFound)(ref_00,p1,p2);
    }
  }
  return;
}
