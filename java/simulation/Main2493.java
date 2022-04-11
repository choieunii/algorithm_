package simulation;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main2493 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        Stack<int[]> stack = new Stack<>();

        for (int i = 0; i < N; i++) {
            int newTop = Integer.parseInt(st.nextToken());

            while (!stack.isEmpty()) {
                int[] tmp = stack.peek();

                if (tmp[0] > newTop) {
                    sb.append(tmp[1] + 1 + " ");
                    break;
                } else {
                    stack.pop();
                }
            }
            if (stack.isEmpty()) {
                sb.append("0 ");
            }

            stack.push(new int[] { newTop, i });
        }

        System.out.println(sb.toString());
    }
}
