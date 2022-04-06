import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1966 {
    static StringTokenizer st;
    static Queue<int[]> queue;
    static int N;
    static int M;
    static int findValue;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuffer sb = new StringBuffer();

        int T = Integer.parseInt(br.readLine());

        for (int i = 0; i < T; i++) {
            queue = new LinkedList<>();
            getInput(br.readLine(), br.readLine());

            int count = 0;
            while (!queue.isEmpty()) {
                int[] temp = queue.poll();

                boolean isPrint = true;

                for (int[] q : queue) {
                    if (q[1] > temp[1]) {
                        isPrint = false;
                        break;
                    }
                }

                if (isPrint) {
                    count++;
                    if (temp[0] == M) {
                        sb.append(count + "\n");
                        break;
                    }
                } else {
                    queue.offer(temp);
                }
            }
        }
        bw.write(sb.toString());
        bw.flush();
    }

    static void getInput(String line1, String line2) {
        st = new StringTokenizer(line1);
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(line2);

        for (int j = 0; j < N; j++) {
            int value = Integer.parseInt(st.nextToken());
            queue.offer(new int[] { j, value });
        }
    }
}
