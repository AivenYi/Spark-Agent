import { toast } from 'sonner';
import { CONTACT } from '@/config/contact';

export const handleWeChatContact = async () => {
  const wechatId = CONTACT.wechatId;
  try {
    await navigator.clipboard.writeText(wechatId);
    toast.success('微信号已复制', {
      description: `已复制微信号：${wechatId}`,
      duration: 3000,
    });
    const urls: string[] = [];
    const qr = CONTACT.wechatQrUrl && CONTACT.wechatQrUrl.trim().length > 0 ? CONTACT.wechatQrUrl : '';
    if (qr) urls.push(qr);
    urls.push(`wxsearch://${wechatId}`);
    urls.push('weixin://');
    let i = 0;
    const openNext = () => {
      if (i >= urls.length) return;
      window.location.href = urls[i++];
      if (i < urls.length) setTimeout(openNext, 1200);
    };
    openNext();
  } catch (err) {
    toast.error('复制失败', {
      description: `请手动复制微信号：${wechatId}`,
      duration: 5000,
    });
  }
};
