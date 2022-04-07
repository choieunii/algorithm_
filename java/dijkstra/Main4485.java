package dijkstra;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main4485 {
    static int N;
    static int[][] arr;
    static int[][] dist;
    static int[] dx = { 1, -1, 0, 0 };
    static int[] dy = { 0, 0, 1, -1 };

    static class Node implements Comparable<Node> {
        int x;
        int y;
        int cost;

        Node(int x, int y, int cost) {
            this.x = x;
            this.y = y;
            this.cost = cost;
        }

        @Override
        public int compareTo(Node o) {
            return this.cost - o.cost;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int cnt = 1;
        N = Integer.parseInt(br.readLine());
        while (N != 0) {
            arr = new int[N][N];
            dist = new int[N][N];
            for (int i = 0; i < N; i++) {
                st = new StringTokenizer(br.readLine());
                for (int j = 0; j < N; j++) {
                    arr[i][j] = Integer.parseInt(st.nextToken());
                    dist[i][j] = Integer.MAX_VALUE;
                }
            }
            System.out.println("Problem " + cnt + ": " + dijkstra());
            N = Integer.parseInt(br.readLine());
            cnt++;
        }
    }

    static int dijkstra() {
        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.add(new Node(0, 0, arr[0][0]));
        dist[0][0] = arr[0][0];

        while (!pq.isEmpty()) {
            Node cur = pq.poll();
            for (int i = 0; i < 4; i++) {
                int nx = cur.x + dx[i];
                int ny = cur.y + dy[i];

                if (nx < 0 || ny < 0 || nx >= N || ny >= N)
                    continue;

                if (dist[nx][ny] > dist[cur.x][cur.y] + arr[nx][ny]) {
                    dist[nx][ny] = dist[cur.x][cur.y] + arr[nx][ny];
                    pq.offer(new Node(nx, ny, dist[nx][ny]));
                }
            }
        }
        return dist[N - 1][N - 1];

    }

}
